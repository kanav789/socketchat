import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false, // 👈 IMPORTANT (security)
    },
    avatar:{
      type: String,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
