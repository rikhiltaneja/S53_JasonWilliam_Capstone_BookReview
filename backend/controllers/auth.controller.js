import User from '../models/user.model.js'
import bycrptjs from 'bcryptjs' 

export const signup = async (req, res) =>{
    const {username,email,password}  = req.body;

    if (!username || !email || !password || username === '' || email ==='' || password ===''){
        return res.status(400).json({message:"All fields are required"})
    } 

    const hashPassword = bycrptjs.hashSync(password,10);
    const existingUser = await User.findOne({ email }); if (existingUser) { return res.status(400).json({ message: "User already exists" }); }

    const newUser = new User({
        username,
        email:existingUser,
        password : hashPassword,
    })

    try {
        await newUser.save()
        res.status(201).json("signup successful")
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}