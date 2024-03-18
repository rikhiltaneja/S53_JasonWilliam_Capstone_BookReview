import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10; // Number of salt rounds for bcrypt

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});


userSchema.pre('save', async function(next) {
  
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('User',userSchema);

export default User;
