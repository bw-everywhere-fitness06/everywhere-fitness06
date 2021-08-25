import BookedClass from "./BookedClass";
import { mockClassData as data } from "../mockData/mockData";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function fetchClasses() {
  return Promise.resolve({ success: true, data });
}

const userId = 1;

function MyBookings() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses().then((res) => {
      setClasses(
        res.data.filter((int) =>
          int.reservedClientIDs.find((element) => element == userId)
        )
      );
      console.log(
        res.data.filter((int) =>
          int.reservedClientIDs.find((element) => element == userId)
        )
      );
    });
  }, []);

  return (
    <div className="classContainer">
      <h1>Booked Classes</h1>
      {classes.map((item, index) => {
        return (
          <Link
            to={{
              pathname: `/class-details/${item.classID}`,
              item: item,
            }}
          >
            <BookedClass item={item} key={index} />
          </Link>
        );
      })}
    </div>
  );
}

export default MyBookings;
