import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';


const userID = 1;
function UpcomingClass({ item }) {
  const { id } = useParams();
  const { push } = useHistory();

  const handleBookCLass = () => {

    axios.post('http://localhost:8081/users',{Name: 'Fred',
    Age: '23'}).then(function (response) {
      console.log(response);
    })
    // push("/bookings");
  };
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
          <button onClick={handleBookCLass}> Book</button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UpcomingClass;
