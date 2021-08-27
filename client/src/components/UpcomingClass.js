import React from "react";
import { useParams, useHistory } from "react-router-dom";


const userID = 1;
function UpcomingClass({ item }) {
  const { id } = useParams();
  const { push } = useHistory();

  const handleBookCLass = () => {
    // axios.post('http://localhost:8081/users',{Name: 'Fred',
    // Age: '23'}).then(function (response) {
    //   console.log(response);
    // })
    // push("/bookings");
  };

  console.log(item);
  if (!item) return <div></div>;
  return (
    <div className="classBox">
      <h3>Class Name : {item.className}</h3>
      <p>Date : {item.startDate}</p>
      <p>Time : {item.startTime}</p>
      <p>Class Type: {item.type}</p>
      <p>Duration: {item.duration} mins</p>
      <p>Class Level: {item.intensity} </p>
      <p>Class Status: {item.status} </p>
      <p>Class Location:{item.location}</p>
      {item ? (
        <button onClick={handleBookCLass}> Book</button>
      ) : (
        <button disabled> Booked</button>
      )}
    </div>
  );
}

export default UpcomingClass;
