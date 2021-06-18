import authReducer, {authActions} from '../authReducer'

const state = {
    auth: false,
    authUser: {
        name: ''
    }
}

describe('auth reducer', () => {
    it('auth should be true', () => {
        const action = authActions.setAuthSuccess(true)
        const modernizedStatePosts = authReducer(state, action)
        expect(modernizedStatePosts.auth).toBe(true)
    })
    it('authUser name should be - Victor', () => {
        const action = authActions.setAuthUserSuccess({ name: 'Victor'})
        const modernizedStatePosts = authReducer(state, action)
        expect(modernizedStatePosts.authUser.name).toBe('Victor')
    })
})