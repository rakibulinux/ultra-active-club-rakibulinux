import { useEffect, useState } from "react";
import "./App.css";
import Activity from "./components/Activity/Activity";
import Home from "./components/Home/Home";
import logo from "./logo.svg";

function App() {
  const [studies, setStudies] = useState([]);
  const [activity, setActivity] = useState([]);

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
            <Home
              study={study}
              key={study.id}
              activity={activity}
              setActivity={activity}
            ></Home>
          ))}
        </div>
        <div className="question text-black m-2 p-2">
          <h2 className="text-2xl">How does react work?</h2>
          <p className="mt-2">
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </p>
          <h2 className="text-2xl">
            Difference between props and state in react?
          </h2>
          <p className="mt-2">
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components. The this. setState property is
            used to update the state values in the component.
          </p>
          <h2 className="text-2xl">UseEffect working area?</h2>
          <p className="mt-2">
            UseEffect is the sideEffect of React. By using this Hook, you tell
            React that your component needs to do something after render. React
            will remember the function you passed (we’ll refer to it as our
            “effect”), and call it later after performing the DOM updates. In
            this effect, we set the document title, but we could also perform
            data fetching or call some other imperative API.
          </p>
        </div>
      </div>

      <div className="Activity bg-gray-200">
        <Activity
          activity={activity}
          setActivity={activity}
          studies={studies}
        ></Activity>
        {/* {studies.map((study) => (
          <List study={study}></List>
        ))} */}
      </div>
    </div>
  );
}

export default App;
