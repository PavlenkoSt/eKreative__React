import React from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { getVideoinfo } from '../API/videos'
import { getYoutubeVideoInfo } from '../Redux/videosReducer'

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
            {!path || !path[1] ? <div>Видео по данному запросу не найдено. <NavLink to='/videosList'>Вернуться назад</NavLink></div> : 
                <>
                    <div className='video__frame'>
                        <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${path[1]}`} 
                            width={'100%'}
                            height={'420px'}
                        />
                    </div>
                    <div className='video__info'>

                    </div>
                </>
            }
            
        </div>
    )
}

export default Video
