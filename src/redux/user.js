import { createSlice } from "@reduxjs/toolkit"
import { userLogin, fetchUser, changeUserName } from "../utils/thunkAuth"

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    email: "",
    firstName: "",
    lastName: "",
    token: "",
    loading: false,
    success: false,
    error: false,
  },
  reducers: {
    updateToken(state, actions) {
      state.token = actions.payload.token;
    },
    login: (state, action) => {
      const { firstName, lastName, token } = action.payload;
      state.isLogged = true;
      state.firstName = firstName;
      state.lastName = lastName;
      state.token = token;
      return state
    },
    logout: (state) => {
      state.isLogged = false;
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      state.success = false;
      return state
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.status === 200) {
        state.token = payload.body.token
        state.isLogged = true
        state.success = true;
      } else {
        state.success = false;
        state.error = payload;
      }
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
    [fetchUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.status === 200) {
        state.firstName = payload.body.firstName
        state.lastName = payload.body.lastName
        
        state.success = true;
      } else {
        state.success = false;
        state.error = payload;
      }
    },
    [fetchUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
    [changeUserName.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [changeUserName.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.status === 200) {
        state.firstName = payload.body.firstName
        state.lastName = payload.body.lastName
        state.success = true;
      } else {
        state.success = false;
        state.error = payload;
      }
    },
    [changeUserName.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
  },
})

export const getUser = (state) => {
  return state.user.user
}

export const { login, logout, updateName } = userSlice.actions

export default userSlice.reducer