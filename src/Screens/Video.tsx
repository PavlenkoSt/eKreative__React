import React from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { videoInfoSelector } from '../Redux/selectors/videosSelector'
import { getYoutubeVideoInfo } from '../Redux/videosReducer'

const Video = () => {
    const dispatch = useDispatch()
    const {
        title,
        description,
        viewCount, 
        likeCount, 
        favoriteCount, 
        commentCount
    } = useSelector(videoInfoSelector)

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
                    <div className='video__info'>
                        <div className='video__stat'>
                            <div>Views: {viewCount}</div>
                            <div>Likes: {likeCount}</div>
                            <div>Favorite: {favoriteCount}</div>
                            <div>Comments: {commentCount}</div>
                        </div>
                        <div>
                            <div>{title}</div>
                            <div>{description}</div>
                        </div>
                    </div>
                </>
            }
            
        </div>
    )
}

export default Video
