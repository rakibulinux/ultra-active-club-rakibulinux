import React from "react";
import List from "../List/List";
import "./Activity.css";

const Activity = ({ studies }) => {
  console.log(studies);
  return (
    <div className="Activity flex flex-col items-center">
      <List></List>
    </div>
  );
};

export default Activity;
