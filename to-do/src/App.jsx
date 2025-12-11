import { useState } from 'react';
import axios from "axios";


export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:8000/todo", {
        addItem:inputValue,
      });
      alert("Submitted Succesfully");
      console.log("Todo Saved", response.data);
      setInputValue("");
    }
    catch(error){
      console.log("Error Saving Todo:", error);
    }
  }

  return (
    <div className="">
      <h1>To-Do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Enter Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

