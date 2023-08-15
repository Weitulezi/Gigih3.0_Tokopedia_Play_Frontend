import { useEffect } from "react"
import { serverDomain } from "../constants/path"

const useGetVideoDetail = (videoId, setVideo, setLoading) => {
    useEffect(() => {
        if (videoId) {
            setLoading(true)
            const getVideo = async () => {
                const res = await fetch(`${serverDomain}/api/videos/${videoId}`)

                const status = await res.status
                const data = await res.json()

                if (status === 200) {
                    if (data) {
                        setVideo(data)
                        setLoading(false)
                    }
                }
            }
            getVideo()
        }
    }, [videoId, setVideo, setLoading])
}

export default useGetVideoDetail
