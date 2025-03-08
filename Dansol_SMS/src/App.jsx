import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import ErrorPage from './ErrorPage'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
