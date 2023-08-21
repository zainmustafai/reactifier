import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone:{
        type: String,
        default: "+92123456789"
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    bio: String,
    profilePicture: String,
    coverPicture: String,
    cvLink: String,
    location: String,

});

const User = mongoose.model("User", userSchema);
export default User;