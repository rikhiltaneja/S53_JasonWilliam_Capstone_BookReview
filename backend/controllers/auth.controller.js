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
            return res.status(400).json({ message: 'User not found' });
        }
        
        const isPasswordValid = bycrptjs.compareSync(password,validator.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' })
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


export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_TOKEN
        );
        const { password, ...rest } = user._doc;
        res
          .status(200)
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bycrptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
          username:
            name.toLowerCase().split(' ').join('') +
            Math.random().toString(9).slice(-4),
          email,
          password: hashedPassword,
          profilePicture: googlePhotoUrl,
        });
        await newUser.save();
        const token = jwt.sign(
          { id: newUser._id, isAdmin: newUser.isAdmin },
          process.env.JWT_TOKEN
        );
        const { password, ...rest } = newUser._doc;
        res
          .status(200)
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .json(rest);
      }
    } catch (error) {
      next(error);
    }
  };