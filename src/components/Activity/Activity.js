import React, { useState } from "react";
import List from "../List/List";
import "./Activity.css";

const Activity = ({ studies }) => {
  const [myAct, setMyAct] = useState([]);
  console.log(myAct);
  return (
    <div className="Activity flex flex-col items-center">
      <List></List>
    </div>
  );
};

export default Activity;
