import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.addNowPlayingMovies)
    console.log(movies)
    if(movies===null) return null;
    const mainMovie=movies[0]
    console.log(mainMovie)
  return (
    <div>
        <VideoTitle title={mainMovie.original_title} desc={mainMovie.overview}/>
        <VideoBackground/>
    </div>
  )
}

export default MainContainer