import React from 'react'
import {PiPlayFill} from "react-icons/pi"


const VideoTitle = ({title,desc}) => {
    
  return (
    <div className='w-screen aspect-video pt-48 px-36 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{desc}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>
            <PiPlayFill className='inline-block '/> Play
            </button>
            <button className=' mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle