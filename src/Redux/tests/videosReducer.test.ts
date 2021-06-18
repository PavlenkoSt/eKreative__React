import videosReducer, {videosActions} from '../videosReducer'

const state = {
    videos: []
}

describe('videos reducer', () => {
    it('auth should be true', () => {
        const newVideos = [
            { 
                id: '123idid',
                title: 'some title',
                photo: 'photoUrl'
            }
        ]
        const action = videosActions.setVideoSuccess(newVideos)
        const modernizedStatePosts = videosReducer(state, action)
        expect(modernizedStatePosts.videos.length).toBe(1)
    })
})