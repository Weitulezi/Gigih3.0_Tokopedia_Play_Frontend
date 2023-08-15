import { useEffect, useContext } from "react"
import { serverDomain } from "../constants/path"
import { AuthContext } from "../contexts/userContext"
import { UserVideosContext } from "../contexts/videoContext"
import { VideoContext } from "../contexts/videoContext"

const useCreateVideo = (
    title,
    setTitle,
    thumbnail,
    setThumbnail,
    embedId,
    setEmbedId,
    category,
    setCategory,
    isSubmitted,
    setIsSubmitted,
    setIsSuccess,
    setMessage,
) => {
    const { authData } = useContext(AuthContext)
    const { setUserVideos } = useContext(UserVideosContext)
    const { setVideosData } = useContext(VideoContext)

    useEffect(() => {
        if (authData && isSubmitted) {
            const createVideo = async () => {
                const res = await fetch(`${serverDomain}/api/videos`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${authData.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        thumbnail,
                        embedId,
                        category: {
                            name: category,
                        },
                    }),
                })
                const status = await res.status
                const data = await res.json()
                if (status === 201 && data) {
                    setTitle("")
                    setThumbnail("")
                    setEmbedId("")
                    setIsSubmitted(false)
                    setMessage(data.message)
                    setIsSuccess(true)
                    setUserVideos(null)
                    setVideosData(null)
                    return
                }
                setMessage(data.message)
                setIsSubmitted(false)
                setIsSuccess(false)
            }
            createVideo()
        }
    }, [
        authData,
        title,
        setTitle,
        thumbnail,
        setThumbnail,
        embedId,
        setEmbedId,
        category,
        setCategory,
        isSubmitted,
        setIsSubmitted,
        setIsSuccess,
        setMessage,
        setUserVideos,
    ])
}

export default useCreateVideo
