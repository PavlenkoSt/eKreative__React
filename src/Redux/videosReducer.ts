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


type InitialValueType = typeof initialValue

export type VideoType = {
    id: string,
    title: string
    photo: string
}
