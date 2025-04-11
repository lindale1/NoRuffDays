import Image from "next/image";
import Card from "./Card";
import Link from "next/link";
// Task component - similar to Item component from UGA items
interface TaskProps {
    task: {
        id: number;
        title: string;
        description: string;
    };
    onDelete: (id: number) => void; // Function to handle task deletion
}

// Using cards
const Task = ({ task, onDelete }: TaskProps) => {
    return (
        <Card className="flex flex-col items-start p-4">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
            <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => onDelete(task.id)}
            >
                Delete Task
            </button>
        </Card>
    );
};

export default Task;