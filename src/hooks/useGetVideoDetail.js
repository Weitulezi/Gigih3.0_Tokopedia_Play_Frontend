import { useEffect } from "react"

const useGetVideoDetail = (videoId, setVideo, setLoading) => {
    useEffect(() => {
        if (videoId) {
            setLoading(true)
            const getVideo = async () => {
                const res = await fetch(
                    `https://tokplay-production-37be.up.railway.app//api/videos/${videoId}`,
                )

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
