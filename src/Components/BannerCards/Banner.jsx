import React from 'react'

const Banner = ({ text }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{text}</h1>
    </div>
  )
}

export default Banner
