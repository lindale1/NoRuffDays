'use client'
import Task from "./Task";
import Link from 'next/link';
import Card from './Card';
import {useState, useEffect} from 'react';
// Tasks component - similar to Items component in UGA items

// Creating dummy array to statically load 3 items on initial load
const Tasks = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", description: "Dummy task 1" },
        { id: 2, title: "Task 2", description: "Dummy task 2" },
        { id: 3, title: "Task 3", description: "Dummy task 3" }
    ]);

    // Handle deleting task
    const handleDelete = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Handle adding a new task
    const handleAddTask = () => {
        const newTask = {
            id: tasks.length + 1,
            title: `New Task ${tasks.length + 1}`,
            description: "This is a dynamically added task."
        };
        setTasks([...tasks, newTask]);
    };

    return (
        <section className="px-6 py-12">
            <div className="container-xl m-auto flex gap-6">
                {/* Task List */}
                <div className="w-1/2 " >
                    <Card className="text-black-200 bg-[#8fbfda] p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">To Do</h2>
                        {tasks.length === 0 ? (
                            <p>No tasks available.</p>
                        ) : (
                            <div className="space-y-4">
                                {tasks.map((task) => (
                                    <Task key={task.id} task={task} onDelete={handleDelete} />
                                ))}
                            </div>
                        )}
                    </Card>
                </div>

                {/* Completed Tasks */}
                <div className="w-1/2 bg-[#8fbfda] p-6 rounded-lg shadow-md">
                    <Card className="bg-white">
                        <h2 className="text-xl font-semibold mb-4">Completed</h2>
                        <p>No tasks have been completed yet.</p>
                    </Card>
                </div>
            </div>

            {/* Add Task Button */}
            <div className="mt-8 flex justify-center">
                <button
                    className="px-6 py-3 text-white text-xl font-semibold hover:brightness-110 transition rounded"
                    style={{ backgroundColor: '#8fbfda' }}
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>
        </section>
    );
};

export default Tasks;