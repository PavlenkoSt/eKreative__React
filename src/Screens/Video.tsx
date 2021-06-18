import React from 'react'
import ReactPlayer from 'react-player'
import { NavLink, useHistory } from 'react-router-dom'

const Video = () => {
    const path = useHistory().location.pathname.match(/\/video\/(.+)/)

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
