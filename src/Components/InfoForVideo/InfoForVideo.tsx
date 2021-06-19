import React from 'react'
import { useSelector } from 'react-redux'
import { videoInfoSelector } from '../../Redux/selectors/videosSelector'

const InfoForVideo = () => {

    const {
        title,
        description,
        viewCount, 
        likeCount, 
        favoriteCount, 
        commentCount
    } = useSelector(videoInfoSelector)

    return (
        <div className='video__info'>
            <div className='video__stat'>
                <div>Views: <span>{viewCount}</span></div>
                <div>Likes: <span>{likeCount}</span></div>
                <div>Favorite: <span>{favoriteCount}</span></div>
                <div>Comments: <span>{commentCount}</span></div>
            </div>
            <div>
                <div className='video__title'>{title}</div>
                <div className='video__desc'>{description}</div>
            </div>
        </div>
    )
}

export default InfoForVideo
