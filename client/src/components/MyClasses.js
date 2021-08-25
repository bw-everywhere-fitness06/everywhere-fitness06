import Class from "./Class";
import { mockClassData as data }  from "../mockData/mockData";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function fetchClasses() {
  return Promise.resolve({ success: true, data });
}


const instructorId = 4

function MyClasses() {
  const [classes, setClasses] = useState([]);
  
  useEffect(() => {
    fetchClasses().then((res) => {
      setClasses(res.data.filter(int=>int.instructorID==instructorId));
      console.log(res.data.filter(int=>int.instructorID==instructorId));
    });
  }, []);


  return (
    <div className="classContainer">
      <h1>All Classes</h1>
      {classes.map((item, index) => {
        return (
          <Link to={{
            pathname: `/class-details/${item.classID}`,
            item: item}}>
            <Class item={item} key={index} />
          </Link>
        );
      })}
    </div>
  );
}

export default MyClasses;
