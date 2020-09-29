import React from 'react'
import Sky from './Sky'


const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight]
  const style = {height: '100%', width: '100%', position: 'fixed', top: '0', left: '0'}
  return (
    <svg 
      id="aliens-go-home-canvas" 
      preserveAspectRatio="xMaxYMax slice" // forces uniform scaling of canvas and its elements
      viewBox={viewBox}
      style={style}
    >
      <Sky />
      <circle cx={0} cy={0} r={50} />
    </svg>
  )
}

export default Canvas;