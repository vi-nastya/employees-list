// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import store from './state/store'
import { EmployeesList } from './components/EmployeesList'
import { AppLayout } from './layout/AppLayout'

export const App = (): React.Node => {
  return (
    <Provider store={store}>
      <AppLayout>
        <EmployeesList />
      </AppLayout>
    </Provider>
  )
}
