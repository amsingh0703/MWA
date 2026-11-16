
import { useState } from 'react';
import './App.css';

function Child({ Name, changeName }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Student Name: {Name}</p>

      <button onClick={() => changeName(Name === "Jhon" ? "Amit" : "Jhon")}>
        Change Name
      </button>
    </div>
  );
}

export default function App() {
  const [Name, setName] = useState("Jhon");
  const [color, changeColor] = useState("red");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h2>Parent Component</h2>
      <p>Student Name: {Name}</p>

      <Child Name={Name} changeName={setName} />

      <button onClick={() => changeColor(color === "red" ? "white" : "red")}>
        Change Color
      </button>
    </div>
  );
}
