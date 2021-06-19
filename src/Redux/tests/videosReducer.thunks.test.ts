import { getVideos, getVideoinfo } from "../../API/videos"
import { getYoutubeVideoList, getYoutubeVideoInfo, videosActions } from "../videosReducer"

jest.mock('../../API/videos')
const mockedGetVideos = getVideos as jest.Mocked<typeof getVideos>
const mockedGetVideoinfo = getVideoinfo as jest.Mocked<typeof getVideoinfo>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
})

describe('videosReducer thunks', () => {
    it('getYoutubeVideoList thunk', async () => {
        const thunk = getYoutubeVideoList()
    
        const result = {
            items: [
                {
                    id: {
                        videoId: '123'
                    },
                    snippet: {
                        title: 'some title',
                        thumbnails: {
                            default: {
                                url: 'some url'
                            }
                        }
                    }
                }
            ]
        }
    
        //@ts-ignore
        mockedGetVideos.mockReturnValue(Promise.resolve(result))
    
        await thunk(dispatchMock, getStateMock, {})
    
        const items = result.items
        .filter((video: any) => video.id.videoId)
        .map((video: any) => ({
            id: video.id.videoId,
            title: video.snippet.title,
            photo: video.snippet.thumbnails.default.url
        }))
    
        expect(dispatchMock).toBeCalledTimes(1)
        expect(dispatchMock).toHaveBeenCalledWith(videosActions.setVideoSuccess(items))
    })

    it('getYoutubeVideoInfo thunk', async () => {
        const thunk = getYoutubeVideoInfo('some id')
    
        const result = {
            items: [
                {
                    id: {
                        videoId: 'some id'
                    },
                    snippet: {
                        title: 'some title',
                        description: 'some desc'
                    },
                    statistics: {
                        viewCount: '1',
                        likeCount: '4', 
                        favoriteCount: '5', 
                        commentCount: '8'
                    }
                }
            ]
        }
    
        //@ts-ignore
        mockedGetVideoinfo.mockReturnValue(Promise.resolve(result))
    
        await thunk(dispatchMock, getStateMock, {})

        const {title, description} = result.items[0].snippet
        const {viewCount, likeCount, favoriteCount, commentCount} = result.items[0].statistics

        const videoInfoItem = {
            title,
            description,
            viewCount, 
            likeCount, 
            favoriteCount, 
            commentCount
        }
    
        expect(dispatchMock).toBeCalledTimes(1)
        expect(dispatchMock).toHaveBeenCalledWith(videosActions.setCurrentVideoInfoSuccess(videoInfoItem))
    })
})