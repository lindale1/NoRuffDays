// Tasks component - similar to Items component in UGA items
'use client'
import Task from "./Task";
import Link from 'next/link';
import Card from './Card';
import Image from 'next/image';
import {useState, useEffect} from 'react';

// Creating interface for TypeScript
interface TaskType {
    _id: string;
    title: string;
    description: string;
    imageUrl?: string;
    completed: boolean;
} // TaskType 

const Tasks = () => {
     // Storing tasks
    const [tasks, setTasks] = useState<TaskType[]>([]);
    // Fetch tasks on /api/tasks route 
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('/api/tasks');
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                } // if
                const data = await response.json();
                 setTasks(data.tasks);
            } catch (error) {
                console.log('Error fetching tasks:', error);
            } // try-catch
            }; // fetchTasks
        fetchTasks();
    }, []); // useEffect

    // Handle deleting task using ID
    const handleDelete = async (id: number) => {
         try {
            const path = await fetch(`/api/tasks/${id}`, {
             method: 'DELETE',
            }); // path using DELETE method 
          
            if (!path.ok) throw new Error('Delete failed');
          
            // Remove task from state after deleting it
            setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        } // try-catch
    }; // handleDelete
        
    // Marking a task as completed properly
    const handleComplete = async (id: string) => {
        try {
            // Fixing completed bug by finding task locally
            const taskToComplete = tasks.find(task => task._id === id);
            if (!taskToComplete) return;

            const path = await fetch(`/api/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                title: taskToComplete.title,
                description: taskToComplete.description,
                imageUrl: taskToComplete.imageUrl, 
                completed: true }),
            }); // path
          
            if (!path.ok) throw new Error('Failed to mark task complete');
          
            // Update the task locally after successful DB update
            setTasks(tasks.map(task =>
                 task._id === id ? { ...task, completed: true } : task
            )); // setTasks
        } catch (error) {
            console.error('Error completing task:', error);
        } // try-catch
    }; // handleComplete

    // Editing a task 
    const handleEdit = async (id: string, newTitle: string, newDescription: string, newImage: string) => {
        try {
            const path = await fetch(`/api/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                title: newTitle,
                description: newDescription,
                imageUrl: newImage,
                }),
            }); // path
          
            if (!path.ok) throw new Error('Edit failed');
          
            // Update task in state
            setTasks(tasks.map(task =>
                task._id === id
                ? { ...task, title: newTitle, description: newDescription, imageUrl: newImage }
                : task
            )); // setTasks
        } catch (error) {
            console.error('Error editing task:', error);
        } // try-catch
    }; // handleEdit

    // Handle adding a new task for Add Task button
    const handleAddTask = async () => {
        // Creating new task
         const newTask = {
            title: `New Task ${tasks.length + 1}`,
            description: "This is a dynamically added task.",
            imageUrl:"", 
            completed: false,
        };
        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            }); // response
    
            if (!response.ok) throw new Error('Failed to add task');
    
            const addedTask = await response.json();
            // Add newly created task
            setTasks([...tasks, addedTask]); 
        } catch (error) {
            console.error('Error adding task:', error);
        } // try-catch
    }; // handleAddTask

    // Divide tasks into completed and not completed
    const toDoTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    // Handle clearing the completed task for the clear completed tasks button
    const handleClearCompleted = async () => {
        try {
        // Delete each completed task
        await Promise.all(completedTasks.map(task => fetch(`/api/tasks/${task._id}`, {
                method: 'DELETE',
        })));
        // Remove completed tasks
        setTasks(tasks.filter(task => !task.completed));
        } catch (error) {
          console.error("Error clearing completed tasks:", error);
        } // try-catch
    }; // handleClearCompleted

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
                                    {toDoTasks.map((task) => (
                                        <Task 
                                        key={task._id} 
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
                                        <Card key={task._id} className="p-4 bg-white rounded-lg shadow-md">
                                            <h2 className="text-lg text-black font-semibold line-through">{task.title}</h2>
                                            <p className="text-gray-600">{task.description}</p>
                                        </Card>
                                    ))}
                                    <div className="mt-4 flex justify-end">
                                        <button onClick={handleClearCompleted} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
                                        >
                                            Clear Completed
                                        </button>
                                    </div>
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
    ); // return
}; // Tasks
export default Tasks;