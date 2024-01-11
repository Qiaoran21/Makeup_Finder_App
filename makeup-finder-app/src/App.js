import React, { useEffect, useState } from "react";
import "mvp.css";
import "./styles.css";
import Search from "./Search";
import { ResultList } from "./ResultList";

function App() {
  const title = "Makeup Finder";
  const description = "Looking for something new?";

  const [results, setResults] = useState([]);

  const [mode, setMode] = useState("🤍");
  const changeMode = () => {
    if (mode === "🖤") {
      setMode("🤍");
    } else {
      setMode("🖤");
    }
  };

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <div className={mode}>
      <button onClick={changeMode}>🖤/🤍</button>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <Search setResults={setResults} />
      <ResultList results={results} />
    </div>
  );
}

export default App;
