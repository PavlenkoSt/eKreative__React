import { AppStateType } from './../reduxStore'

export const videosSelector = (state: AppStateType) => state.videos.videos
export const videoInfoSelector = (state: AppStateType) => state.videos.currentVideoInfo
