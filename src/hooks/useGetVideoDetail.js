import { useEffect } from "react"

const useGetVideoDetail = (videoId, setVideo) => {
    useEffect(() => {
        if (videoId) {
            const getVideo = async () => {
                const res = await fetch(`/api/videos/${videoId}`)

                const status = await res.status
                const data = await res.json()

                if (status === 200) {
                    if (data) {
                        setVideo(data)
                    }
                }
            }
            getVideo()
        }
    }, [videoId, setVideo])
}

export default useGetVideoDetail
