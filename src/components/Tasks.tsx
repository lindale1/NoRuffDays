'use client'
import Task from "./Task";
import Link from 'next/link';
import Card from './Card';
import Image from 'next/image';
import {useState, useEffect} from 'react';
// Tasks component - similar to Items component in UGA items

// Creating dummy array to statically load 3 items on initial load
const Tasks = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", description: "Clean house", imageUrl:"https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xlYW58ZW58MHx8MHx8fDI%3D" },
        { id: 2, title: "Task 2", description: "Do homework", imageUrl:"https://images.unsplash.com/photo-1601397922721-4326ae07bbc5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXdvcmt8ZW58MHx8MHx8fDI%3D"},
        { id: 3, title: "Task 3", description: "Buy groceries", imageUrl:"https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyaWVzfGVufDB8fDB8fHww"}
    ]);

const [completedTasks, setCompletedTasks] = useState<any[]>([]);

    // Handle deleting task
    const handleDelete = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleComplete = (id: number) => {
        const completed = tasks.find(task => task.id === id);
        if (completed) {
            setCompletedTasks([...completedTasks, completed]);
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    const handleEdit = (id: number, newTitle: string, newDescription: string, newImage: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, title: newTitle, description: newDescription, imageUrl: newImage } : task
        ));
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
                                    <Task 
                                    key={task.id} 
                                    task={task} 
                                    onDelete={handleDelete} 
                                    onComplete={handleComplete}
                                    onEdit={handleEdit}
                                    />
                                ))}
                            </div>
                        )}
                    </Card>
                </div>
            
                 {/* Completed Tasks */}
                 <div className="w-1/2">
                    <Card className="text-black-200 bg-[#8fbfda] p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Completed</h2>
                        {completedTasks.length === 0 ? (
                            <p>No tasks have been completed yet.</p>
                        ) : (
                            <div className="space-y-4">
                                {completedTasks.map(task => (
                                    <Card key={task.id} className="p-4 bg-white rounded-lg shadow-md">
                                        <h2 className="text-lg font-semibold line-through">{task.title}</h2>
                                        <p className="text-gray-600">{task.description}</p>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </Card>
                </div>
            </div>




            {/* Add Task Button */}
            <div className="mt-8 flex justify-center">
                <Link
                    href="/create-task"
                    className="px-6 py-3 text-white text-xl font-semibold hover:brightness-110 transition rounded"
                    style={{ backgroundColor: '#8fbfda' }}
                    >
                    Add task
                </Link>
            </div>
        </section>
    );
};

export default Tasks;