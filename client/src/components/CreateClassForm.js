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
      .typeError("please enter an integer")
      .required("Required"),
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    duration: Yup.string().required("Required"),
    currentEnrolled: Yup.string().required("Required"),
  });

  const [inputClass, setInputClass] = useState(initialClass);
  console.log(inputClass);

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
    </Container>
  );
}

export default CreateClassForm;
