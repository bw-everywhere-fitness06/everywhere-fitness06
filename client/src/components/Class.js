import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

function Class({ singleClass }) {
  return (
    <div className="classBox">
      <h1>Class Name : {singleClass.className}</h1>
      <p>Date : {singleClass.date}</p>
      <p>Time : {singleClass.time}</p>
      <p>Duration: {singleClass.duration}</p>
      <p>Class Size: {singleClass.maxSize}</p>
      <p>Class Instructor: {singleClass.instructor}</p>

      <p>Class Level :{singleClass.intensityLevel}</p>
      <button> Edit Class</button>
      <button> Cancel Class</button>
    </div>
  );
}

export default Class;
