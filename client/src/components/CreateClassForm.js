import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "./FormsUI/TextField";
import DatePicker from "./FormsUI/DatePIcker";
import TimePicker from "./FormsUI/TimePicker";
import Button from "./FormsUI/Button";

function CreateClassForm() {
  const initialClass = {
    className: "",
    type: "",
    date: "",
    time: "",
    duration: "",
    intensityLevel: "",
    location: "",
    maxSize: "",
    currentEnrolled: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    className: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    intensityLevel: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    maxSize: Yup.number()
      .integer()
      .typeError("please enter a integer")
      .required("Required"),
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    duration: Yup.string().required("Required"),
    currentEnrolled: Yup.string().required("Required"),
  });

  const [inputClass, setInputClass] = useState(initialClass);
  console.log(inputClass);
  const addNewClassHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm" className="form">
      <Grid item xs={12}>
        <h1>Create a New Class</h1>
      </Grid>
      <Formik
        validationSchema={FORM_VALIDATION}
        initialValues={{ ...initialClass }}
        onSubmit={(values) => {
          setInputClass(values);
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField name="className" label="Class Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="type" label="Class Type" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="intensityLevel" label="Class Level" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="maxSize" label="Class Size" />
            </Grid>

            <Grid item xs={12}>
              <TextField name="location" label="Location" />
            </Grid>
            <Grid item xs={6}>
              <DatePicker name="date" label="Date" />
            </Grid>
            <Grid item xs={6}>
              <TimePicker name="time" label="Time" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="duration" label="Duration" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="currentEnrolled"
                label="Currently Enrolled People"
              />
            </Grid>
            <Grid item xs={12}>
              <Button>Submit Form</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>

      {/* <form onSubmit={addNewClassHandler}>
        <h1>Create a New Class</h1>
        <div>
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              setInputClass({ ...inputClass, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="type">Class Type</label>
          <input
            type="text"
            name="type"
            onChange={(e) =>
              setInputClass({ ...inputClass, type: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="type">Date</label>
          <input
            type="date"
            name="date"
            onChange={(e) =>
              setInputClass({ ...inputClass, date: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="type">Time</label>
          <input
            type="time"
            name="time"
            onChange={(e) =>
              setInputClass({ ...inputClass, time: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="type">Duration</label>
          <input
            type="text"
            name="duration"
            onChange={(e) =>
              setInputClass({ ...inputClass, duration: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="type">Level</label>
          <input
            type="text"
            name="intensityLevel"
            onChange={(e) =>
              setInputClass({ ...inputClass, intensityLevel: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="type">Location</label>
          <input
            type="text"
            name="location"
            onChange={(e) =>
              setInputClass({ ...inputClass, location: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="type">Class Size</label>
          <input
            type="number"
            name="maxSize"
            onChange={(e) =>
              setInputClass({ ...inputClass, maxSize: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="type">Number of people enrolled</label>
          <input
            type="text"
            name="currentEnrolled"
            onChange={(e) =>
              setInputClass({ ...inputClass, currentEnrolled: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </Container>
  );
}

export default CreateClassForm;
