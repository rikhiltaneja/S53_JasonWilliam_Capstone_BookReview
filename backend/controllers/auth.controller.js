import User from '../models/user.model.js'
import bycrptjs from 'bcryptjs' 
import { errorHandler } from '../utils/error.js';

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