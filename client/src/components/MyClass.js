import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";

function MyClass({ item }) {
  if (!item) return <div></div>;
  return (
    <div className="classBox">
      <h3>Class Name : {item.className}</h3>
      <p>Date : {item.startDate}</p>
      <p>Time : {item.startTime}</p>
      <p>Attendees: {item.type}</p>
    </div>
  );
}

export default MyClass;
