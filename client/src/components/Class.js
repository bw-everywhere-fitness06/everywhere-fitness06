import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteAClass } from "../Actions/classes";
import { useDispatch } from "react-redux";
import DeleteClassModal from "./DeleteClassModal";
function Class({ singleClass }) {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const modalHandler = () => {
    setIsShowingModal(!isShowingModal);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteClassHandler = () => {
    console.log(singleClass.classID);
    dispatch(deleteAClass(singleClass.classID));
  };

  if (!singleClass) return <div></div>;
  return (
    <div className="classBox">
      {isShowingModal && (
        <DeleteClassModal
          modalHandler={modalHandler}
          id={singleClass.classID}
        />
      )}
      <h3>Class Name : {singleClass.className}</h3>
      <p>Date : {singleClass.startDate}</p>
      <p>Time : {singleClass.startTime}</p>
      <p>Class Type: {singleClass.type}</p>
      <p>Duration: {singleClass.duration}</p>
      <p>Class Size: {singleClass.capacity}</p>
      <p>Class Instructor: {singleClass.instructorID}</p>
      <p>Class Level :{singleClass.intensity}</p>
      <Link to={`/classes/edit/${singleClass.classID}`}>
        <button> Edit Class</button>
      </Link>
      <button onClick={modalHandler}> Cancel Class</button>
    </div>
  );
}

export default Class;
