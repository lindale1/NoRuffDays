// Task component - similar to Item component from UGA items
import Image from "next/image";
import Card from "./Card";
import Link from "next/link";
import { useState } from 'react';

// Creating interface for TypeScript
interface TaskProps {
    task: {
        _id: string;
        title: string;
        description: string;
        imageUrl?: string;
        completed: boolean;
    };
    onDelete: (id: string) => void; // Function to handle task deletion
    onComplete: (id: string) => void;
    onEdit: (id: string, newTitle: string, newDescription: string, newImage:string) => void
} // TaskProps

// Using a card for each task 
const Task = ({ task, onDelete, onComplete, onEdit }: TaskProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [imageUrl, setImage] = useState(task.imageUrl);
    // Save all edits on a task card
    const handleSave = () => {
        onEdit(task._id, title, description, imageUrl || '');
        setIsEditing(false);
    };

    return (
        <Card className="flex flex-col items-start p-4 bg-white text-stone-900 rounded-lg shadow-md">
            {/* Adding image to each task */}
            {task.imageUrl && (
                <div className="w-full h-48 relative mb-4">
                    <Image src={task.imageUrl} alt={task.title}  fill className="object-cover rounded-md" />
                </div>
            )}

            {isEditing ? (
                <>
                    <input
                        className="mb-2 w-full border p-1 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="mb-2 w-full border p-1 rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button
                        className="mb-2 px-3 py-1 text-sm font-semibold text-white bg-green-600 rounded"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </>
            ) : (
                <>
                    <h2 className="text-lg font-semibold">{task.title}</h2>
                    <p className="text-gray-600">{task.description}</p>
                </>
            )}

            <div className="mt-2 flex gap-2">
                <button
                    className="px-2 py-1 text-sm bg-black text-white rounded"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? "Cancel" : "Edit"}
                </button>
                <button
                    className="px-2 py-1 text-sm bg-blue-600 text-white rounded"
                    onClick={() => onComplete(task._id)}
                >
                    Mark Complete
                </button>
                <button
                    className="px-2 py-1 text-sm bg-red-600 text-white rounded"
                    onClick={() => onDelete(task._id)}
                >
                    Delete
                </button>
            </div>
        </Card>
    );
};

export default Task;