import React, { useState } from "react";
import "./App.css";

async function loadGreeting() {
  const response = await fetch("http://localhost:9000/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query: "{ greeting }" })
  });
  const responseBody = await response.json();
  return responseBody.data.greeting;
}

function App() {
  const [greeting, setGreeting] = useState("");
  loadGreeting().then(greeting => setGreeting(greeting));
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{greeting}</h1>
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
      </header>
    </div>
  );
}

export default App;
