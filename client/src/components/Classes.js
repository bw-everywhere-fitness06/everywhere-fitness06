import Class from "./Class";
<<<<<<< HEAD
import React, { useEffect } from "react";
import { fetchClasses } from "../Actions/classes.js";
import { Grid, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreateClassForm from "./CreateClassForm";

function Classes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClasses());
  }, []);

  const allClasses = useSelector((state) => state.classes);
  console.log(allClasses);
  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <h1> Classes</h1>
        {!allClasses.length ? (
          <CircularProgress />
        ) : (
          <div>
            {allClasses.map((item, index) => {
              return <Class singleClass={item} key={index} />;
            })}
          </div>
        )}
      </Grid>
      <Grid item xs={5}>
        <CreateClassForm />
      </Grid>
    </Grid>
=======
import { mockClassData as data }  from "../mockData/mockData";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function fetchClasses() {
  return Promise.resolve({ success: true, data });
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
>>>>>>> main
  );
}

export default Classes;
