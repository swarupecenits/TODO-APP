import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { databases } from '../appwrite/appwrite_config';

function TodoForm() {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await databases.createDocument(
        '60031472772024',
        '32847928202',
        uuidv4(), // Assuming uuidv4() generates a unique ID for each todo
        { todo }
      );
      console.log('Todo added:', response);
      setTodo(''); // Clear input field after successful submission
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="bg-purple-500 p-2 text-white ml-2 rounded-md" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
