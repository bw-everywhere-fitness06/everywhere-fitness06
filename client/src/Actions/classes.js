import axios from "axios";

const fetchAll = (data) => {
  return { type: "FETCH_ALL", payload: data };
};

const createClass = (input) => {
  return { type: "CREATE_CLASS", payload: input };
};

export const updateClass = (updatedInput) => {
  return { type: "UPDATE_CLASS", payload: updatedInput };
};

export const fetchClasses = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/classes")
      .then((res) => {
        console.log(res);
        dispatch(fetchAll(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const fetchSingleClass = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/classes/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(fetchAll(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
export const createNewClass = (input) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/classes", input)
      .then((res) => {
        dispatch(createClass(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const updateAClass = (classID, input) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/classes${classID}`, input)
      .then((res) => {
        dispatch(updateClass(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
