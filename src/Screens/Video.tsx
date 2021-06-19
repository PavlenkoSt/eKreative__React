import React from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { getYoutubeVideoInfo } from '../Redux/videosReducer'
import InfoForVideo from '../Components/InfoForVideo/InfoForVideo'

const Video = () => {
    const dispatch = useDispatch()
    const path = useHistory().location.pathname.match(/\/video\/(.+)/)

    useEffect(() => {
        if(path && path[1]){
            dispatch(getYoutubeVideoInfo(path[1]))
        }
    }, [])

    return (
        <div className='video'>
            {!path || !path[1] ? <div>No video found for this request. <NavLink to='/videosList'>Jump back to videos list</NavLink></div> : 
                <>
                    <div className='video__frame'>
                        <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${path[1]}`} 
                            width={'100%'}
                            height={'420px'}
                        />
                    </div>
                    <InfoForVideo/>
                    <div className='video__backlink'>
                        <NavLink to='/videosList'>Back to videos list</NavLink>
                    </div>
                </>
            }
            
        </div>
    )
}

export default Video
