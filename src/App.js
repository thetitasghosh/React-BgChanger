import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("lightblue")
  const Color = [
      {colname:"red",colcode:"#FF0000"},
      {colname:"green",colcode:"#00FF00"},
      {colname:"blue",colcode:"#0000FF"},
  ]
  return (
    <div className="App"
      style={{ backgroundColor: color }}
    >
      <div className='Bar'>
      {
        Color.map((col,id)=>{
          return <button key={id} onClick={()=>setColor(col.colcode)}>{col.colname}</button>
        })
      }
      </div>
    </div>
  );
}

export default App;
