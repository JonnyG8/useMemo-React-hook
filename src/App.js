
import './App.css';
import {useState} from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const [number, setNumber] = useState([
    1, 2, 3, 4, 5, 6, 7
  ]);

  return (
    <div className="App">
      < ChildComponent number={number}/>
    </div>
  );
}

export default App;
