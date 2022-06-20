const initialState = [
  {
    id: 1,
    fName: "Parth",
    lName: "Singh",
    address: "Patna",
    gender: "male",
    email: "parthsingh@gmail.com",
    pNumber: "8651483376",
  },
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DETAILS":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
export default userReducer;
