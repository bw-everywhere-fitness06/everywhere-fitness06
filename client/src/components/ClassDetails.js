import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useParams,useHistory} from "react-router-dom";
import { mockClassData as data} from "../mockData/mockData";
import Timer from './Timer'

function fetchClassDetails(id) {
    const dataItem= data.filter(e=>e.classID==id)
    return Promise.resolve({ success: true, data:dataItem[0] });
  }

function ClassDetails() {
    const [details, setDetails] = useState([]);
    const [timer, setTimer] = useState([]);

    const { push } = useHistory()
    const { id } = useParams();
    useEffect(() => {
        fetchClassDetails(id).then((res) => {
            setDetails(res.data);
          console.log(res.data);
        });

      }, []);


    const handleStartClass = () =>{

    }

    const handleEdit = () =>{
        push('/edit')
    }
  return (
    <Container maxWidth="sm" className="classbox">
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Class Name:: {details.className}</h1>
        </Grid>
        <Grid item xs={4}>
          <span>Date :</span> {details.startDate}
        </Grid>
        <Grid item xs={4}>
          <span>Time :</span> {details.startTime}
        </Grid>
        <Grid item xs={4}>
          <span>Duration :</span> {details.duration} mins
        </Grid>
        <Grid item xs={4}>
          <span>Class Capacity :</span> {details.capacity}
        </Grid>
        <Grid item xs={4}>
          <span>Class Level :</span>
          {details.intensity}
        </Grid>
        <Grid item xs={4}>
          <span>Class Status :</span>
          {details.status}
        </Grid>
        <Grid item xs={6}>
          <span>Class Location :</span>
          {details.location}
        </Grid>
        <Grid item xs={6}>
          <span>Class Instructor :</span>
          {details.instructorID}
        </Grid>
        <Grid item xs={12}>
          <span>Reserved Client : {details.reservedClientID}</span>
        </Grid>
        <Grid item xs={12}>
          <Timer duration={details.duration} />
        </Grid>
        <Grid item xs={6}>
          <button onClick={handleStartClass}> Start Class</button>
        </Grid>
        <Grid item xs={6}>
          <button onClick={handleEdit}> Edit Details</button>
        </Grid>
      </Grid>

    </Container>
  );
}

export default ClassDetails;
