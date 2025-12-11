import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/todo");
      setTodoList(response.data.todo);
    } catch (error) {
      console.error("Error Fetching Todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/todo", {
        addItem: inputValue,
      });
      alert("Submitted Successfully");
      setInputValue("");
      fetchTodos(); 
    } catch (error) {
      console.log("Error Saving Todo:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8000/todo/${id}`, {
        addItem: editingText,
      });

      setTodoList(
        todoList.map((item) =>
          item._id === id ? { ...item, addItem: editingText } : item
        )
      );

      alert("Updated Successfully");
      setEditingId(null);
      setEditingText("");
    } catch (error) {
      console.log("Error in updating todo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/todo/${id}`);
      alert("Deleted Successfully");
      setTodoList(todoList.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Error Deleting todo:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          To-Do App
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter a task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg outline-none 
                       focus:ring-2 focus:ring-blue-500 shadow-sm"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg
                       font-semibold hover:bg-blue-700 transition
                       shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </form>

        <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-4">
          Your Todos
        </h2>

        <div className="space-y-3">
          {todoList.map((item) => (
            <div
              key={item._id}
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 
                         shadow-sm hover:shadow-md transition-all duration-200 
                         hover:bg-gray-100 flex items-center justify-between"
            >
              {editingId === item._id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="border px-2 py-1 rounded-lg w-full mr-3"
                />
              ) : (
                <p className="text-gray-800 font-medium tracking-wide">
                  {item.addItem}
                </p>
              )}

              <div className="flex items-center space-x-3">
                {editingId === item._id ? (
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="px-3 py-1 text-sm font-semibold bg-green-500 
                               text-white rounded-md hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingId(item._id);
                      setEditingText(item.addItem);
                    }}
                    className="px-3 py-1 text-sm font-semibold bg-yellow-400 
                               text-white rounded-md hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-3 py-1 text-sm font-semibold bg-red-500 
                             text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
