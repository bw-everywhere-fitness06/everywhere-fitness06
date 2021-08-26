import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

function Class({ singleClass }) {
  if (!singleClass) return <div></div>;
  return (
    <div className="classBox">
      <h3>Class Name : {singleClass.className}</h3>
      <p>Date : {singleClass.startDate}</p>
      <p>Time : {singleClass.startTime}</p>
      <p>Class Type: {singleClass.type}</p>

      <p>Duration: {singleClass.duration}</p>
      <p>Class Size: {singleClass.capacity}</p>
      <p>Class Instructor: {singleClass.instructorID}</p>

      <p>Class Level :{singleClass.intensity}</p>
      <button> Edit Class</button>
      <button> Cancel Class</button>
    </div>
  );
}

export default Class;
