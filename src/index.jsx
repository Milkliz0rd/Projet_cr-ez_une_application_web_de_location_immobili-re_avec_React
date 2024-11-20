import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Error404 from './Pages/Error404/Error404.jsx'
import AccommodationSheet from './Pages/AccomodationSheet/AccommodationSheet.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/accommodation" element={<AccommodationSheet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
