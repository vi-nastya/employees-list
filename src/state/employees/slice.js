import { createSlice } from '@reduxjs/toolkit'

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getEmployees(state) {
      state.data = []
      state.isLoading = true
      state.error = null
    },
    getEmployeesSuccess(state, action) {
      state.data = action.payload
      state.isLoading = false
      state.error = null
    },
    getEmployeesFailure(state, action) {
      state.data = []
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { reducer, actions } = employeesSlice
