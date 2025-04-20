import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    unique: true,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  year_graduated: {
    type: Number,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  linkedin_link: {
    type: String,
    required: true,
  }
}, {
    timestamps: true
  });

export default mongoose.model('User', userSchema);