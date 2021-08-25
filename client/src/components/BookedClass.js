import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

function Class({ item }) {

  const { id } = useParams();
  if (!item) return <div></div>;
  return (
    <Container maxWidth="sm" className="classbox">
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
          <button> Cancel Class</button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Class;
