import React, { useEffect } from 'react'
import { videosActions, VideoType } from '../Redux/videosReducer'
import { useDispatch, useSelector } from 'react-redux'
import VideoForList from '../Components/VideoForList/VideoForList'
import { videosSelector } from '../Redux/selectors/videosSelector'


const Videos = () => {
    const dispatch = useDispatch()
    const videos = useSelector(videosSelector)

    useEffect(() => {
        const getVideos = async () => {
            const {REACT_APP_YOUTUBE_API_KEY, REACT_APP_YOUTUBE_CHANNEL_ID} = process.env
            
            const data = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${REACT_APP_YOUTUBE_API_KEY}&channelId=${REACT_APP_YOUTUBE_CHANNEL_ID}&maxResults=2&part=snippet`)
            const responce = await data.json()

            if(responce && responce.items){
                const items = responce.items
                    .filter((video: any) => video.id.videoId)
                    .map((video: any) => ({
                        id: video.id.videoId,
                        title: video.snippet.title,
                        photo: video.snippet.thumbnails.default.url
                    }))
                dispatch(videosActions.setVideoSuccess(items))
            }
        }
        getVideos()
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
