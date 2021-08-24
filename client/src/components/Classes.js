import Class from "./Class";
import React, { useEffect } from "react";
import { fetchClasses } from "../Actions/classes.js";

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
      <Class />
      <Class />
      <Class />
    </div>
  );
}

export default Classes;
