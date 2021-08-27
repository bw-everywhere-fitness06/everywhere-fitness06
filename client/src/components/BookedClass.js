import React from "react";
import { updateAClass,updateClass } from "../Actions/classes.js";
import { useDispatch} from "react-redux";
import axios from 'axios';


function BookedClass({ item, userId }) {
  console.log(item)
  const dispatch = useDispatch();


  const handleCancelCLass = () => {
    item.reservedClientIDs = item.reservedClientIDs.filter(e=>e != userId)
    axios
      .put(`http://localhost:5000/classes/${item.classID}`, item)
      .then((res) => {
        console.log(res)
        dispatch(updateClass(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
    // useDispatch(updateAClass(item.classID, item))
  };

  if (!item) return <div></div>;
  return (
    <div className="classBox">
      <h3>Class Name : {item.className}</h3>
      <p>Date : {item.startDate}</p>
      <p>Time : {item.startTime}</p>
      <p>Class Type: {item.type}</p>
      <p>Duration: {item.duration} mins</p>
      <p>Class Level: {item.intensity} </p>
      <p>Class Status: {item.status} </p>
      <p>Class Location:{item.location}</p>
      <button onClick={handleCancelCLass}> Cancel Class</button>
    </div>
  );
}

export default BookedClass;
