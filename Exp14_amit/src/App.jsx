import { createContext,useContext,useState } from "react";

const countContext = createContext();

function DisplayCount(){
  const {count} = useContext(countContext);
  return <h3>Count: {count}</h3>  
}

function Counter(){
  const {count,setCount} = useContext(countContext);
  return(
    <div className="button">
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
}


export default function App() {
  const [count,setCount] = useState(0);
  return (
    <countContext.Provider value={{count,setCount}}>
      <div className="App">
        <h2>Global State Management.</h2>
        <DisplayCount/>
        <Counter/>
      </div>
    </countContext.Provider>
  );
}