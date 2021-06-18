import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

type VideoForListPropsType = {
    id: string
    title: string
    photo: string
}

const VideoForList: FC<VideoForListPropsType> = ({ id, title, photo}) => {
    return (
        <NavLink to='/'>
            <div>
                <img src={photo} alt="photo" />
            </div>
            <div>{title}</div>
        </NavLink>
    )
}

export default VideoForList
