import { AppStateType } from './../reduxStore'

export const videosSelector = (state: AppStateType) => state.videos.videos
