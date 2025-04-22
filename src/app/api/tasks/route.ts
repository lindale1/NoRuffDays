// Each HTTP method will handle requests made to /api/tasks route
import connectMongoDB from "../../../../config/mongodb";
import Task from "../../../models/taskSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Add a task in MongoDB collection w/ POST request for /api/tasks
export async function POST(request: NextRequest) {
  // Parse Request body w/ request.json() and extract info from JSON body of request
  const { title, description, dueDate, priority, imageUrl, completed } = await request.json();
  // Connect to MongoDB w/ function
  await connectMongoDB();
  // Create the item w/ Mongoose create() api; also set completed to false
  await Task.create({ title, description, dueDate, priority, imageUrl, completed: false });
  // Return JSON response w/ success message & status code
  return NextResponse.json({ message: "Task added successfully" }, { status: 201 });
} // POST method

// Get the list of tasks from /api/tasks
export async function GET() {
  // Connect
  await connectMongoDB();
  // Fetch all tasks from database
  const tasks = await Task.find();
  return NextResponse.json({ tasks });
} // GET method
