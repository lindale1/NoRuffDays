// Each HTTP method will handle requests made to /api/tasks/:id route
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../../../config/mongodb";
import Task from "../../../../models/taskSchema";

// Update a specific task w/ PUT method for /api/tasks/:id 
export async function PUT(request:NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const updateData = await request.json(); // Allowing subset of data in order to allow completed/to do tasks
  // Connect to MongoDB w/ function
  await connectMongoDB();
  // Find the task by given Mongo ID and update it properly 
  const updatedTask = await Task.findByIdAndUpdate(id, updateData, {
    new: true, 
    runValidators: true, // Fix schema bug
  });
  return NextResponse.json({ message: "Task updated", task: updatedTask }, { status: 200 });
} // PUT method

// Get a specific task w/ GET method for /api/tasks/:id
export async function GET(request:NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectMongoDB();
  // Find the task by given Mongo ID
  const task = await Task.findOne({ _id: id });
  return NextResponse.json({ task }, { status: 200 });
} // GET

// Delete a specific task w/ DELETE method for /api/tasks/:id
export async function DELETE(request: NextRequest, context: { params: { id: string}} ) {
  const { id } = await context.params;
  // Ensuring ID is valid given Mongo ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
  } // if 
  await connectMongoDB();
  const deletedTask = await Task.findByIdAndDelete(id);
  // Task does not exist
  if (!deletedTask) {
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  } // if 
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
} // DELETE 