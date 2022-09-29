import { useEffect, useState } from "react";
import "./App.css";
import Activity from "./components/Home/Activity/Activity";
import Home from "./components/Home/Home";
import logo from "./logo.svg";

function App() {
  const [studies, setStudies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setStudies(data));
  }, []);
  return (
    <div className="App">
      <div className="Home-side">
        <nav className="study-logo">
          <img src={logo} className="App-logo h-16" alt="logo" />
          <h1 className="logo-text">Rakib Study Mart</h1>
        </nav>
        <h3 className="font-semibold text-black mb-10 text-lg">
          Select today’s exercise
        </h3>
        <div className="Home">
          {studies.map((study) => (
            <Home study={study} key={study.id}></Home>
          ))}
        </div>
      </div>

      <div className="Activity bg-gray-200">
        <Activity></Activity>
      </div>
    </div>
  );
}

export default App;
