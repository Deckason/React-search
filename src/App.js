import './App.css';
import MOCK_DATA_JSON from "./MOCK_DATA.json";
import {useState} from "react";
function App() {

  

  return (
    <div className="App">
     {MOCK_DATA_JSON.map((data,key)=>(
      <div className="data" key={key}>
        <p>{data.first_name}</p>
      </div>
     ))}
    </div>
  );
}

export default App;
