import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const userModel = mongoose.model('User', userSchema);
export { userSchema as user };
