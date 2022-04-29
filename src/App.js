import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time.");

  useEffect(() => { //최초 render 할때만 실행
    console.log("I run only once.");
  }, []);

  useEffect(() => { //최초 render 할 때 실행, keyword 값이 변화할 때 실행.
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => { //최초 render 할 때 실행, counter 값이 변화할 때 실행.
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => { //최초 render 할 때 실행, counter값과 keyword 값이 변화할 때 실행.
    console.log("I run when 'keyword' & 'counter' changes.");
  }, [keyword, counter]);
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here ..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
