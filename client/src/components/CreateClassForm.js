import React from "react";
import { useState } from "react";

function CreateClassForm() {
  const initialClass = {
    name: "",
    type: "",
    startTime: "",
    duration: "",
    intensityLevel: "",
    location: "",
    maxSize: "",
    currentEnrolled: "",
  };

  const [inputClass, setInputClass] = useState(initialClass);
  console.log(inputClass);
  return (
    <form>
      <div>
        <label htmlFor="name">Event Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setInputClass({ ...setInputClass, name: e.target.value })
          }
        />
      </div>
    </form>
  );
}

export default CreateClassForm;
