'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../../components/Card';
import { MongoClient } from 'mongodb';
// Create-task page
export default function TaskAddForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Low', 
        imageUrl: '',
      });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: name === 'owner' ? Number(value): value,
        }));
    }; // handleChange

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();


        try {
          const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          // HERE: Log full response
          console.log("Response status:", response.status);
          const resBody = await response.json().catch(() => ({}));
          console.log("Response body:", resBody);
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          setFormData({  title: '', description: '', dueDate: '', priority: 'Low', imageUrl: '' });
          // Changed this
          router.push('/tasktracker');
        } catch (error) {
          console.error('Error in CreateTask!', error);
        }
    }; // handleSubmit

    return (
        <div className="max-w-lg mx-auto mt-10 px-4">
             <h2 className="text-lg font-semibold mt-2">Create a New Task</h2>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Task Title"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Task Description"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                > 
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <input
                name="imageUrl"
                type="url"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 text-white text-xl font-semibold hover:brightness-110 transition rounded"
                  style={{ backgroundColor: '#8fbfda' }}
                >
                  Add Task
                </button>
              </div>
            </form>
          </Card>
        </div>
      ); // return

} // TaskAddForm