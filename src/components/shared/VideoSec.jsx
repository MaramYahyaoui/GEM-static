import React from 'react'
import video from '../../assets/vid1.mp4'
import video1 from '../../assets/video2.mp4'
import video2 from '../../assets/video3.mp4'

const VideoSec = () => {
  return (
  <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold leading-tight flex flex-col text-center">
              Plus qu’un sport, une passion à partager 
              <span className="text-primary mt-5">Vivez l’intensité, vibrez padel !</span>
            </h1>
           
          </div>

          
          <div className="flex lg:w-1/2 justify-between gap-4">
            <div className="w-1/3">
                  <video
                src={video}
                autoPlay
                loop
                muted
                className="rounded-md shadow-md"
              />
            </div>
            <div className="w-1/3 mt-4">
              <video
                src={video1}
                autoPlay
                loop
                muted
                className="rounded-md shadow-md"
              />
            </div>
            <div className="w-1/3 mt-8">
                  <video
                src={video2}
                autoPlay
                loop
                muted
                className="rounded-md shadow-md"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default VideoSec


