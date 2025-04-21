import mongoose, { Schema, Document, Model } from "mongoose";
// Mongoose provides properties such as the _id in Document, we extend this

interface ITask extends Document {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  imageUrl: string;
  completed: Boolean;
}

const taskSchema = new Schema<ITask> ({
  title: {
    type: String,
    required: true
  }, 
  description: {
    type: String,
    required: true
  }, 
  dueDate: {
    type: String,
    required: false
  }, 
  priority: {
    type: String,
    required: true
  }, 
  imageUrl: {
    type: String,
    required: false
  }, 
  completed: {
    type: Boolean, 
    default: false
  }
})

const Task: Model<ITask> = mongoose.models.Task || mongoose.model<ITask>("Task", taskSchema);
export default Task;