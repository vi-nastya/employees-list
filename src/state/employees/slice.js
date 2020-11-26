import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import api from '../../api/api'
import type { Employee } from '../../types/employee'

const employeesInitialState = {
  data: [],
  isLoading: false,
  error: null,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState: employeesInitialState,
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

export const fetchEmployees = () => async (dispatch) => {
  dispatch(employeesSlice.actions.getEmployees())
  try {
    const employeesData = await api.getEmployees()
    dispatch(employeesSlice.actions.getEmployeesSuccess(employeesData))
  } catch (err) {
    dispatch(
      employeesSlice.actions.getEmployeesFailure(
        'Не удалось загрузить информацию о сотрудниках'
      )
    )
  }
}
