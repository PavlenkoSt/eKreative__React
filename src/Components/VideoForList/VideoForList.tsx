import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

type VideoForListPropsType = {
    id: string
    title: string
    photo: string
}

const VideoForList: FC<VideoForListPropsType> = ({ id, title, photo}) => {
    return (
        <NavLink to={`/video/${id}`} className='list__item'>
            <div className='list__photo'>
                <img src={photo} alt="photo" />
            </div>
            <div className='list__title'>{title}</div>
        </NavLink>
    )
}

export default VideoForList
