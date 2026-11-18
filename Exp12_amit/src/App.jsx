import {useState, useMemo} from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [num,setnum] = useState(10);

  const sum =useMemo( () =>{
    let total = 0;
    for(let i=0;i<num;i++){
      total += i;
    }
    return total;
  },[num]);

  return (
    <div className="App">
       <h2>React useMemo Example</h2>
      <section className="calculater">
       
      
        <label >Enter a number:
        <input type="number" min = "0" value={num} onChange={(e) => setnum(Math.max(0,e.target.value))} />
        <p>Sum of numbers from 0 to {num-1} is: {sum}</p>
        </label>
      </section>


      <h3>Counter</h3>
      <section className="counter">
        
        <p>Count: {count}</p>
        <br />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </section>
    </div>
  )
}