import { AnyAction, Store } from "redux"
import { ThunkAction } from "redux-thunk"
import { getVideos } from "../API/videos"

export const videosActionsTypes = {
    SET_VIDEOS: 'SET_VIDEOS'
}

export const videosActions = {
    setVideoSuccess: (videos: Array<VideoType>) => ({ type: videosActionsTypes.SET_VIDEOS, videos})
}

const initialValue = {
    videos: []
}

const videosReducer = (state = initialValue, action: any): InitialValueType => {
    switch(action.type){
        case videosActionsTypes.SET_VIDEOS: {
            return {
                ...state,
                videos: action.videos
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


type InitialValueType = typeof initialValue
type ThunkType = ThunkAction<void, Store, unknown, AnyAction>


export type VideoType = {
    id: string,
    title: string
    photo: string
}
