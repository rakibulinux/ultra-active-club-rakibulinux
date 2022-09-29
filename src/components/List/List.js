import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import profile from "../../profile.jpg";
import "./List.css";

const List = () => {
  return (
    <div>
      <div className="Activity flex flex-col items-center">
        <div className="flex justify-center items-center card">
          <div className="mt-5">
            <img className="ml-3 w-10 h-10 rounded-full" src={profile} alt="" />
          </div>
          <div className="mt-5 ml-2 text-black">
            <p className="text-black font-bold">MD RAKIBUL ISLAM</p>
            <p className="text-gray-400">
              <FontAwesomeIcon icon={faMapLocation} /> Kushtia, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 bg-gray-300 rounded-lg w-64 text-black font-semibold">
          <div className="p-2">
            <p>
              75<sub className="text-gray-700">kg</sub>
            </p>
            <p className="text-gray-700">Weight</p>
          </div>
          <div className="p-2">
            <p>6.5</p>
            <p className="text-gray-700">Height</p>
          </div>
          <div className="p-2">
            <p>
              28<sub className="text-gray-700">yrs</sub>
            </p>
            <p className="text-gray-700">Age</p>
          </div>
        </div>
        <h2 className="mt-5 font-semibold text-lg text-black">Add A Break</h2>
        <div className="flex justify-center items-center mt-10 bg-gray-300 rounded-lg w-64 text-black font-semibold">
          <div className="p-2 flex gap-2">
            <button className="bg-sky-500 rounded-full text-white p-1">
              <span>20</span>d
            </button>
            <button className="bg-sky-500 rounded-full text-white p-1">
              <span>20</span>d
            </button>
            <button className="bg-sky-500 rounded-full text-white p-1">
              <span>20</span>d
            </button>
            <button className="bg-sky-500 rounded-full text-white p-1">
              <span>20</span>d
            </button>
          </div>
        </div>
        <h2 className="mt-5 font-semibold text-lg text-black">
          Exercise Details
        </h2>

        <div className="mt-10 bg-gray-300 rounded-lg w-64 text-black font-semibold">
          <div className="p-2 flex flex-row justify-between mx-2 items-center">
            <p>Exercise time</p>
            <p className="text-gray-700">days</p>
          </div>
        </div>
        <div className="mt-10 bg-gray-300 rounded-lg w-64 text-black font-semibold">
          <div className="p-2 flex flex-row justify-between mx-2 items-center">
            <p>Break time</p>
            <p className="text-gray-700">
              <span>200</span> days
            </p>
          </div>
        </div>
        <button className="btn btn-accent my-5">Activity Completed</button>
      </div>
    </div>
  );
};

export default List;
