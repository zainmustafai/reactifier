import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String, required: true
    },
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