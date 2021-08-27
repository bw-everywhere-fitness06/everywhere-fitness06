import MyClass from "./MyClass";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses } from "../Actions/classes.js";


const instructorId = 4;

function MyClasses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClasses())
  }, [dispatch]);

  const allClasses = useSelector((state) => state.classes)

  if (!Array.isArray(allClasses)) return <div></div>;
  return (
    <div className="classContainer">
      <h1>My Classes</h1>
      {allClasses.filter((int) => int.instructorID == instructorId).map((item, index) => {
        return (
          <Link
            to={{
              pathname: `/class-details/${item.classID}`,
              item: item,
            }}
          >
            <MyClass item={item}/>
          </Link>
        );
      })}
    </div>
  );
}

export default MyClasses;
