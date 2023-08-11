import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogIn: false,
    email: "",
    firstName: "",
    lastName: "",
    token: "",
  },
  reducers: {
    updateToken(state, actions) {
      state.token = actions.payload.token;
    },
    login: (state, action) => {
      const { email, firstName, lastName } = action.payload;
      state.isLogIn = true;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      return state
    },
    logout: (state) => {
      state.isLogIn = false;
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      return state
    },
  },
})

export const getUser = (state) => {
  return state.user.user
}

export const { login, logout } = userSlice.actions

export default userSlice.reducer