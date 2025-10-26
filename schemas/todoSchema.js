import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive']
  },
  date: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('crud', todoSchema)
