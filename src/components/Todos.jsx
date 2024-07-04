import React, { useState, useEffect } from 'react';
import { databases } from '../appwrite/appwrite_config';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchTodos = async () => {
      try {
        const response = await databases.listDocuments('60031472772024', '32847928202');
        setTodos(response.documents);
      } catch (error) {
        console.log('Error fetching todos:', error);
      } finally {
        setLoader(false);
      }
    };
    fetchTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      await databases.deleteDocument('60031472772024', id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.$id !== id)); // Update state using functional form
    } catch (error) {
      console.log('Error deleting todo:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todos.length > 0 ? (
            todos.map(item => (
              <div key={item.$id}>
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>
                    <p>{item.todo}</p>
                  </div>
                  <div>
                    <span
                      className="text-red-400 cursor-pointer"
                      onClick={() => deleteTodo(item.$id)}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No todos found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Todos;
