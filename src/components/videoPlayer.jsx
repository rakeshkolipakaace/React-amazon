import React from 'react'

const videoPlayer = ({src})=> {
  return (
    <><div className="video-container">
      <video
      src={src}
      className="video-player"
      autoPlay
      loop
      muted
      playsInline
      
      /></div></>
  )
}

export default videoPlayer;