const initialClass = [
  {
    className: "",
    type: "",
    date: "",
    time: "",
    duration: "",
    intensityLevel: "",
    location: "",
    maxSize: "",
    currentEnrolled: "",
  },
];

const classes = (state = initialClass, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE_CLASS":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default classes;
