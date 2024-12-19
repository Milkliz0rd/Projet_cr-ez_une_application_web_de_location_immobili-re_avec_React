import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.scss' // ici on regroupe tous les styles dans un seul fichier Index.scss.
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Error404 from './Pages/Error404/Error404.jsx'
import AccommodationSheet from './Pages/AccomodationSheet/AccommodationSheet.jsx'
import Layout from './Layout.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* Ici nous faisont appel au composant BrowserRouter qui provient de la bibliothèque React-Router-dom, c'est lui qui va nous permettre de naviguer entre les pages de notre application.*/}
    <BrowserRouter>
      <Routes>
        {/* Chaque page est définit dans un composant 'Route' qui possèdent le composant 'Layout' qui servira de mise en page générale de l'application */}
        <Route path="/" element={<Layout />}>
          {/* On indique que la page 'Home' est la page principal grace à index */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/accomodation/:accomodationId"
            element={<AccommodationSheet />}
          />
          {/* Cette route possède un path '*' pour dire que tous les autres url utilisés hormis ceux que l'on a définit dans 'Routes' renverront à la page 404. */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
