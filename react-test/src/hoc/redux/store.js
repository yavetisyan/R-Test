import { createStore } from "redux";

const initialState = {
  currentUser: {
    name: "John Week",
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === "edit-current-user-name") {
    return {
      ...state,
      currentUser: {
        name: action.payload.name,
      },
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
