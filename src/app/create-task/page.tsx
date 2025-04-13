'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../../components/Card';
// Create-task page
export default function TaskAddForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Low', 
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

        // Only console.logging right now - go back to UGA items later:
        // POST item - to submit new item form data, make a fetch post
        // request to send data to endpoint for items (/api/items) from UGA items
        console.log('Created task:', formData);

        setFormData({ title: '', description: '', dueDate: '', priority: 'Low'});
        router.push('/tasktracker');
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