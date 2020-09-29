import React from 'react'
import Sky from './Sky'
import Ground from './Ground'
import CannonBase from './CannonBase'
import CannonPipe from './CannonPipe'


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
      <Ground />
      <CannonPipe rotation={45} />
      <CannonBase />
    </svg>
  )
}

export default Canvas;