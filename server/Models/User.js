import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: 0
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
export default User;
