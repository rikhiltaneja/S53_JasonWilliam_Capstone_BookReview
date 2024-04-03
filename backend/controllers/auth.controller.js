import User from '../models/user.model.js'
import bycrptjs from 'bcryptjs' 
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res,next) =>{
    const {username,email,password}  = req.body;

    if (!username || !email || !password || username === '' || email ==='' || password ===''){
        next(errorHandler(400,'All fields are required'))
    } 

    const hashPassword = bycrptjs.hashSync(password,10);
    const existingUser = await User.findOne({ email }); if (existingUser) { return res.status(400).json({ message: "User already exists" }); }

    const newUser = new User({
        username:username,
        email:existingUser ? "err" : email,
        password : hashPassword,
    })

    try {
        await newUser.save()
        res.status(201).json("signup successful")
        
    } catch (error) {
        next(error);
    }

}


export const signin = async(req, res,next) =>{
    const{email,password} = req.body;
    
    if (!email || !password || email === '' || password ===''){
        next(errorHandler(400,'All fields are required'))
    }

    try {
        const validator = await User.findOne({ email });
        if (!validator){
            return next(errorHandler(400,'user not found'))
        }
        
        const isPasswordValid = bycrptjs.compareSync(password,validator.password);
        if (!isPasswordValid) {
            return next(errorHandler(400,'Invalid credentials'))
        }

        const token = jwt.sign(
            {id:validator._id},process.env.JWT_TOKEN)

        const{password:paswrd,...rest} = validator._doc  //to hide the password from the response
        res.status(200).cookie('access_token',token, {
            httpOnly:true
        }).json(rest)
        
    } catch (error) {
        next(error)
    }
}