import mongoose from 'mongoose';

const majorSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: false,
  },
  degree_types: {
    type: [String],
    required: false,
  },
  requirements: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  contact_email: {
    type: String,
    required: false,
  }
}, {
    timestamps: true
  });

export default mongoose.model('Major', majorSchema);
