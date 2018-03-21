import React from 'react'
import ReactDOM from 'react-dom'
import '../public/style.css'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home.jsx'

ReactDOM.render(
    <Provider store = {store} >
        <Home />
    </Provider>,
    document.getElementById('app')
)