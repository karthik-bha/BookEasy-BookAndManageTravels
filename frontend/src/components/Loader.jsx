import React from 'react'
import Loading from "../assets/Loader.webm"

const Loader = () => {
  return (
    <div className="h-auto mx-auto  flex justify-center">
      <video
        src={Loading}
        alt="Loading...."
        type="video/webm"
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default Loader
