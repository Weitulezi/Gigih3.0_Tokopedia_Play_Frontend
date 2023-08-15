import { useContext, useEffect, useState } from "react"
import { serverDomain } from "../constants/path"
import { AuthContext } from "../contexts/userContext"
import { UserVideosContext, VideoContext } from "../contexts/videoContext"

const useDeleteVideo = (videoId) => {
    const { authData } = useContext(AuthContext)
    const { setVideosData } = useContext(VideoContext)
    const { setUserVideos } = useContext(UserVideosContext)

    const [deleteVideo, setDeleteVideo] = useState(false)

    useEffect(() => {
        if (deleteVideo && authData) {
            const reqDeleteData = async () => {
                const res = await fetch(
                    `${serverDomain}/api/videos/${videoId}`,
                    {
                        method: "DELETE",
                        headers: {
                            Authorization: `Bearer ${authData.token}`,
                        },
                    },
                )
                const status = await res.status
                const data = await res.json()
                if (status === 200) {
                    // Show success delete
                    setVideosData(null)
                    setUserVideos(null)
                }
                setDeleteVideo(false)
            }
            reqDeleteData()
        }
    }, [deleteVideo, videoId])

    return { deleteVideo, setDeleteVideo }
}

export default useDeleteVideo
