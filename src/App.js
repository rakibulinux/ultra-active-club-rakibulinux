import { useEffect, useState } from "react";
import "./App.css";
import Activity from "./components/Home/Activity/Activity";
import Home from "./components/Home/Home";

function App() {
  const [studies, setStudies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setStudies(data));
  }, []);
  return (
    <div className="App">
      <div>
        <nav className="study-logo">
          <img src="../../../public/study.png" alt="" />
          <h1>Rakib Study Mart</h1>
        </nav>
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
