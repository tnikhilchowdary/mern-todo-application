import { useState, useEffect } from 'react';
import axios from "axios";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);


  const fetchTodos = async () => {
    try{
      const resposne = await axios.get("http://localhost:8000/todo");
      setTodoList(resposne.data.todo);
    }
    catch(error){
      console.error("Error Fetching Todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/todo", {
        addItem: inputValue,
      });
      alert("Submitted Successfully");
      console.log("Todo Saved:", response.data);
      setInputValue("");
    } catch (error) {
      console.log("Error Saving Todo:", error);
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
        <h2>Your TodoS</h2>
        <ul>
          {todoList.map((item) => {
            return(
            <li key={item.id}>
              {item.addItem}
            </li>
            )
          })}
        </ul>
        <></>
      </div>
    </div>
  );
}
