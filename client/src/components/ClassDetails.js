import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useParams,useLocation } from "react-router-dom";

function ClassDetails() {
    const location = useLocation()
    const { item } = location

    const { id } = useParams();
    console.log(item);
  return (
    <Container>
       <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Class Name:: {item.className}</h1>
        </Grid>
        <Grid item xs={4}>
          <span>Date :</span> {item.startDate}
        </Grid>
        <Grid item xs={4}>
          <span>Time :</span> {item.startTime}
        </Grid>
        <Grid item xs={4}>
          <span>Duration :</span> {item.duration} mins
        </Grid>
        <Grid item xs={4}>
          <span>Class Capacity :</span> {item.capacity}
        </Grid>
        <Grid item xs={4}>
          <span>Class Level :</span>
          {item.intensity}
        </Grid>
        <Grid item xs={4}>
          <span>Class Status :</span>
          {item.status}
        </Grid>
        <Grid item xs={6}>
          <span>Class Location :</span>
          {item.location}
        </Grid>
        <Grid item xs={6}>
          <span>Class Instructor :</span>
          {item.instructorID}
        </Grid>
        <Grid item xs={12}>
          <span>Reserved Client : {item.reservedClientID}</span>
        </Grid>
        <Grid item xs={6}>
          <button> Edit Class</button>
        </Grid>
        <Grid item xs={6}>
          <button> Cancel Class</button>
        </Grid>
      </Grid>

    </Container>
  );
}

export default ClassDetails;
