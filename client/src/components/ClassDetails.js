import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses, fetchSingleClass } from "../Actions/classes.js";

import Timer from "./Timer";

function ClassDetails() {
  const item = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleClass(id));
  }, [dispatch]);

  if (!item) return <div></div>;
  return (
    <div className="classBox">
      <h3>Class Name : {item.className}</h3>
      <p>Date : {item.startDate}</p>
      <p>Time : {item.startTime}</p>
      <p>Class Type: {item.type}</p>

      <p>Duration: {item.duration}</p>
      <p>Class Size: {item.capacity}</p>

      <p>Class Level :{item.intensity}</p>

      <Timer />
{/* 
      <Link to={`/classes/edit/${item.classID}`}>
        <button > Edit Details</button>
      </Link> */}
    </div>
  );
}

export default ClassDetails;
