import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'tasker',
  initialState: {
    value: 0,
    value1: 0,
  },
  reducers: {
    home: (state) => {
      state.value = 0
    },
    about: (state) => {
      state.value = 1
    },
    certificates: (state) => {
      state.value = 2
    },
    contact: (state) => {
      state.value = 3
    },
    project: (state) => {
      state.value = 4
    },
    english: (state) => {
      state.value1 = 0
    },
    amharic: (state) => {
      state.value1 = 1
    }
  }
})

export const { home, about, certificates, contact, project, amharic, english } = counterSlice.actions
export default counterSlice.reducer;