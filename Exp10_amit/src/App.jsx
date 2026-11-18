import React from "react";
import {useState} from "react";
import './App.css'

export default function App() {
  //premitive state value
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello React");
  const [isVisible, setIsVisible] = useState(true);

  //Array state value
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
  const [newFruit, setNewFruit] = useState("");

  //add an item to array
  const addfruits = () => {
    if(newFruit.trim() !== ""){
      setFruits([...fruits, newFruit.trim()]);
      setNewFruit("");
    }
  }

  //remove an item from array
  const removeFruit = (index) => {
    const updatedFruits = fruits.filter((_, i) => i !== index);
    setFruits(updatedFruits);
  }
  return(
    <div className="container">
      <h2>Experiment 10:React State Management.</h2>

      <section className="card">
        <br />
        <h3>1.Number State</h3>
        <p>Count: {count}</p>
        <br />
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>

      <section className="card">
        <br />
        <h3>2.String State</h3>
        <p>Message: {message}</p>
        <br />
        <button onClick={() => setMessage("Hello World")}>Change Message</button>
        <button onClick={() => setMessage("Hello React")}>Reset Message</button>
      </section>

      <section className="card">
        <br />
        <h3>3. Boolean State</h3>
        <p>Visibility: {isVisible ? "Visible" : "Hidden"}</p>
        <br />
        <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      </section>

      <section className="card">
        <br />
        <h3>4. Array State</h3>
        <input type="text" value={newFruit} onChange={(e) => setNewFruit(e.target.value)} placeholder="Enter fruit name"></input>
        <button onClick={addfruits}>Add Fruit</button>

        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>
              {fruit} <button onClick={() => removeFruit(index)}>Remove</button>
            </li>
          ))}
        </ul>

        <p>Total Fruits: {fruits.length}</p>
      </section>

    </div>
  );
}