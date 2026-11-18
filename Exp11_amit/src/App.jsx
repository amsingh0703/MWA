import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [Name, setName] = useState("Amit");

  //no dependency array
  //run after every render
  useEffect( 
    () => {
      console.log("Effect 1: After every render");
    }
  );

  //2. dependency array is empty
  useEffect(
    () => {
      console.log("Effect 2: component mounted");

      return () => {
        console.log("Effect 2: component Cleanup");
      }
    },[]
  );

  //3. specific dependency
  useEffect(
    () => {
      console.log("Effect 3: count changed");
    },[count]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Name: {Name}</h1>
      <button onClick={() => setName(Name === "Amit" ? "John" : "Amit")}>Change Name</button>
    </div>
  );
}