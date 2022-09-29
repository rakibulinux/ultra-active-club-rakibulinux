import React from "react";
import "./Home.css";
const Home = ({ study }) => {
  console.log(study);
  const { id, img, name, time, age } = study;

  return (
    <div className="Home">
      <div className="card card-compact w-80 bg-base-100 shadow-xl card-size">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="p-4 text-white">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-semibold">For Age:</span> {age} years
          </p>
          <p>
            <span className="font-semibold">Time required:</span> {time} days
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-accent add-btn">Add to List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
