import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import ErrorPage from './ErrorPage'
import Foot from './Foot'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <Foot />
    </Router>
    </div>
  )
}

export default App
