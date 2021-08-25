// import axios from "axios";
// import { NavDropdown } from "react-bootstrap";

// const fetchAll = (data) => {
//   return { type: "FETCH_ALL", payload: data };
// };

// const createClass = (input) => {
//   return { type: "CREATE_CLASS", payload: input };
// };

// export const fetchClasses = () => {
//   return (dispatch) => {
//     axios
//       .get("http://localhost:5000/classes")
//       .then((res) => {
//         dispatch(fetchAll(res.data));
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
// };

// export const createNewClass = (input) => {
//   return (dispatch) => {
//     axios
//       .post("http://localhost:5000/classes", input)
//       .then((res) => {
//         dispatch(createClass(res.data));
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
// };
