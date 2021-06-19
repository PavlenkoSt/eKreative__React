import videosReducer, {videosActions} from '../videosReducer'

const state = {
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

    it('currentVideoInfo title should be helloWorld', () => {
        const newCurrentVideoInfo = { 
            title: 'helloWorld',
            description: '',
            viewCount: '',
            likeCount: '',
            favoriteCount: '',
            commentCount: ''
        }
        
        const action = videosActions.setCurrentVideoInfoSuccess(newCurrentVideoInfo)
        const modernizedStatePosts = videosReducer(state, action)
        expect(modernizedStatePosts.currentVideoInfo.title).toBe('helloWorld')
    })
})