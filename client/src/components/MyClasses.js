import MyClass from "./MyClass";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses } from "../Actions/classes.js";

// function fetchClasses() {
//   return Promise.resolve({ success: true, data });
// }



const instructorId = 4;

function MyClasses() {
  const allClasses = useSelector((state) => state.classes)
  const classes = allClasses.filter((int) => int.instructorID == instructorId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClasses())
  }, []);

  // console.log(classes)

  return (
    <div className="classContainer">
      <h1>My Classes</h1>
      {classes.map((item, index) => {
        return (
          <Link
            to={{
              pathname: `/class-details/${item.classID}`,
              item: item,
            }}
          >
            <MyClass item={item} key={index} />
          </Link>
        );
      })}
    </div>
  );
}

export default MyClasses;
