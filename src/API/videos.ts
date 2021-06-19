export const getVideos = async () => {
    const {REACT_APP_YOUTUBE_API_KEY, REACT_APP_YOUTUBE_CHANNEL_ID} = process.env
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${REACT_APP_YOUTUBE_API_KEY}&channelId=${REACT_APP_YOUTUBE_CHANNEL_ID}&maxResults=2&part=snippet`)
    return await data.json()
}