import { useEffect } from "react"

const useGetVideoList = (videosData, setVideosData) => {
    useEffect(() => {
        const getVideos = async () => {
            if (videosData === null) {
                const res = await fetch(`/api/videos`)
                const status = await res.status
                const data = await res.json()
                if (data) {
                    if (status === 200) {
                        setVideosData(data)
                    }
                }
            }
        }
        getVideos()
    }, [videosData, setVideosData])
}

export default useGetVideoList
