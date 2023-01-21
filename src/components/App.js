//컴포넌트 하나

import Button from "../Button";
import styles from "./App.module.css"
import { useState,useEffect } from "react";

function App() {
  const [counter,setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick =()=>{
    setValue((prev) =>prev +1)
  }
  console.log("i run all the time");

  useEffect(()=>{
    console.log("called api");
  },[]);

  useEffect(()=>{
    if(keyword !=="" && keyword.length > 6){
      console.log("search for",keyword);
    }
  },[keyword]);


  const onChange =(event)=>{
    setKeyword(event.target.value);
  }

  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here.."
      />

      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick} >click me</button>
    </div>
  );
}

export default App;