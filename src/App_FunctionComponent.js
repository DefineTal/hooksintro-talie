import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [message, setMessage] = useState("Hello World!");
  const [state2, setState2] = useState("e");
  // useEffect with empty dependency array =
  // depends on nothing, will run when declared
  // but never again
  useEffect(() => {
    console.log("Component loaded");
  }, []);
  
  useEffect(() => {
    return(() => {
      console.log("Component will unmount")
    })
  })
  // useEffect with variable in dependency array =
  // depends on variable, will run when delcared AND updated
  // but not on anything not listed in dependeancy array
  useEffect(() => {
    console.log("message updated, new value is " + message);
  }, [message])

  return (
    <div className="App">
      {/* <h1> {message}</h1> */}
      <h1>{message}</h1>

      <button onClick={() => setMessage(322142464535454)}>
        Change message
      </button>

      <input type='text' value={message} onChange={(event) => setMessage(event.target.value)} />

    </div>
  );

}

export default App;
