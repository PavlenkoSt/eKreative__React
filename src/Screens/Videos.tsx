import React, { useEffect } from 'react'
import { videosActions } from '../Redux/videosReducer'
import { useDispatch } from 'react-redux'


const Videos = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getVideos = async () => {
            const data = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAbmMW9WnFV2Or3b9w4q6UtuOyB1tQXVNY&channelId=UCP_IYZTiqbmUqmI3KXHIEoQ&maxResults=50&part=snippet')
            const responce = await data.json()

            const items = responce.items.map((video: any) => ({
                id: video.id.videoId,
                title: video.snippet.title,
                photo: video.snippet.thumbnails.default.url
            }))
            
            dispatch(videosActions.setVideoSuccess(items))
        }
        getVideos()
    }, [])

    return (
        <div className='list'>
            VideosList
        </div>
    )
}

export default Videos
