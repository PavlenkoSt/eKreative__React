import { AppStateType } from './../reduxStore'

export const authSelector = (state: AppStateType) => state.auth.auth
export const authUserSelector = (state: AppStateType) => state.auth.authUser