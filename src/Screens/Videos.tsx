import React, { useEffect } from 'react'
import { getYoutubeVideoList, VideoType } from '../Redux/videosReducer'
import { useDispatch, useSelector } from 'react-redux'
import VideoForList from '../Components/VideoForList/VideoForList'
import { videosSelector } from '../Redux/selectors/videosSelector'


const Videos = () => {
    const dispatch = useDispatch()
    const videos = useSelector(videosSelector)

    useEffect(() => {
        dispatch(getYoutubeVideoList())
    }, [])

    const listRender = videos.map((video: VideoType, i) => <VideoForList
        key={i}
        id={video.id}
        title={video.title}
        photo={video.photo}
    />) 

    return (
        <div className='list'>
            {videos.length ? listRender : <p>Видео пока нет!</p>}
        </div>
    )
}

export default Videos
