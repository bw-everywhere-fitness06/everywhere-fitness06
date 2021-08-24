import Class from "./Class";
import { mockClassData } from "../mockData/mockData";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function fetchClasses() {
  return Promise.resolve({ success: true, mockClassData });
}

function Classes() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetchClasses().then((res) => {
      setClasses(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="classContainer">
      <h1>All Classes</h1>
      {mockClassData.map((item, index) => {
        return (
          <Link to={`/classes/${item.classID}`}>
            <Class item={item} key={index} />
          </Link>
        );
      })}
    </div>
  );
}

export default Classes;
