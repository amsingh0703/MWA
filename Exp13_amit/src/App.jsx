import {useState, useCallback, memo} from 'react';

const Child = memo( function Child({onClick}) {
  console.log('Child rendered');
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
});

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handleClick = useCallback(() => {
    alert('Button clicked!');
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Number: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <Child onClick={handleClick} />
    </div>
  );
}