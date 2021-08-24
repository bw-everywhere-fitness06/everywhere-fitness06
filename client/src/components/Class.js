import React from "react";

function Class({ singleClass }) {
  return (
    <div>
      <h1>Class Name : {singleClass.className}</h1>
      <p>Date : {singleClass.date}</p>
      <p>Time : {singleClass.time}</p>
      <p>Duration: {singleClass.duration}</p>
      <p>Class Size: {singleClass.maxSize}</p>
      <p>Class Level :{singleClass.intensityLevel}</p>
      <button> Edit Class</button>
      <button> Cancel Class</button>
    </div>
  );
}

export default Class;
