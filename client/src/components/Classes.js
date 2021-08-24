import Class from "./Class";
import React, { useEffect } from "react";
import { fetchClasses } from "../Actions/classes.js";
import { Grid, CircularProgress } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

function Classes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClasses());
  }, []);

  const allClasses = useSelector((state) => state.classes);
  console.log(allClasses);
  return (
    <div>
      <h1> Classes</h1>
      {!allClasses.length ? (
        <CircularProgress />
      ) : (
        <Grid>
          {allClasses.map((item, index) => {
            return <Class singleClass={item} key={index} />;
          })}
        </Grid>
      )}
    </div>
  );
}

export default Classes;
