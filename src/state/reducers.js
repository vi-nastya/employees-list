import { combineReducers } from '@reduxjs/toolkit'
import { reducer as employees } from './employees/slice'

export const rootReducer = combineReducers({ employees })
