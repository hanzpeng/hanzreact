
  import React, { useEffect, useState } from "react";

  function Button(props){
    const handleClick = () => props.onclickFunction(props.increment);
    return (
      <button onClick={handleClick}>
      +{props.increment}
      </button>
    )
  }

  function Display(props) {
    return (
      <div>
        <div>
        {props.message}
        </div>
        <div>
        <input/>
         
        </div>
      </div>
    )
  }


  function Counters(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = (x) => {setCounter(counter + x)};
    return (
      <div>
      <Button onclickFunction = {incrementCounter} increment = {1} />
      <Button onclickFunction = {incrementCounter} increment = {5} />
      <Display message = {counter}/>
    </div>
    )
  }

  function HelloReact(){
    return   React.createElement(
      "div",
        null,
        "Hello React",
        React.createElement('input', null)
      );
  }
  export default function MainContent() {
    return (
      <div>
        <h2>Welcome to Hanz React Page</h2>
        <HelloReact />
        <ol>
          <li>test111</li>
          <li>test222</li>
          <li>test333</li>
        </ol>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counters />
      </div>
    )
  }

  

   