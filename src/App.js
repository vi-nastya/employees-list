import React from 'react'
import ReactDOM from 'react-dom'

export const App = () => <div>Test</div>

const wrapper = document.getElementById('app')
wrapper ? ReactDOM.render(<App />, wrapper) : false
