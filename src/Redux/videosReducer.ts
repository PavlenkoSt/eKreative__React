import { getVideoinfo } from './../API/videos'
import { AnyAction, Store } from "redux"
import { ThunkAction } from "redux-thunk"
import { getVideos } from "../API/videos"

export const videosActionsTypes = {
    SET_VIDEOS: 'SET_VIDEOS',
    SET_CURRENT_VIDEO_INFO: 'SET_CURRENT_VIDEO_INFO'
}

export const videosActions = {
    setVideoSuccess: (videos: Array<VideoType>) => ({ type: videosActionsTypes.SET_VIDEOS, videos}),
    setCurrentVideoInfoSuccess: (videoInfo: VideoInfoType) => ({ type: videosActionsTypes.SET_CURRENT_VIDEO_INFO, videoInfo})
}

const initialValue = {
    videos: [],
    currentVideoInfo: {
        title: '',
        description: '',
        viewCount: '',
        likeCount: '',
        favoriteCount: '',
        commentCount: ''
    }
}

const videosReducer = (state = initialValue, action: any): InitialValueType => {
    switch(action.type){
        case videosActionsTypes.SET_VIDEOS: {
            return {
                ...state,
                videos: action.videos
            }
        }
        case videosActionsTypes.SET_CURRENT_VIDEO_INFO: {
            return {
                ...state,
                currentVideoInfo: action.videoInfo
            }
        }
        default: return state
    }
}

export default videosReducer


export const getYoutubeVideoList = (): ThunkType => async dispatch => {
    const responce = await getVideos()
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

export const getYoutubeVideoInfo = (id: string): ThunkType => async dispatch => {
    const responce = await getVideoinfo(id)
    if(responce.items && responce.items.length && responce.items[0]){
        const {title, description} = responce.items[0].snippet
        const {viewCount, likeCount, favoriteCount, commentCount} = responce.items[0].statistics

        const videoInfo = {
            title,
            description,
            viewCount, 
            likeCount, 
            favoriteCount, 
            commentCount
        }

        dispatch(videosActions.setCurrentVideoInfoSuccess(videoInfo))
    }
}


type InitialValueType = typeof initialValue
type ThunkType = ThunkAction<void, Store, unknown, AnyAction>


export type VideoType = {
    id: string,
    title: string
    photo: string
}

export type VideoInfoType = {
    title: string
    description: string
    viewCount: string
    likeCount: string
    favoriteCount: string
    commentCount: string
}