import mongoose from "mongoose";
import bcrypt from 'bcrypt'

export const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", async function (next) {
    try {
      this.password = await bcrypt.hash(this.password as string, 10);
      next();
    } catch (error) {
      console.error(error);
    }
});

export const User = mongoose.model('user', userSchema);
