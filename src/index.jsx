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
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }} //enlève le flag warning qui annonce la futur version de React Router
    >
      <Routes>
        {/* Chaque page est définit dans un composant 'Route' */}
        <Route
          path="/"
          element={
            // les pages sont intégrées dans 'Layout' pour avoir la même structure de page partout et éviter de rappeler les composants fixes de chaques pages.
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/accomodation/:accomodationId"
          element={
            <Layout>
              <AccommodationSheet />
            </Layout>
          }
        />
        {/* Cette route possède un path '*' pour dire que tous les autres url utilisés hormis ceux que l'on a définit dans 'Routes' renverront à la page 404. */}
        <Route
          path="/404"
          element={
            <Layout>
              <Error404 />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Error404 />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
