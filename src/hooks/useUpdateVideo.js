import { useEffect, useState, useContext } from "react"
import { serverDomain } from "../constants/path"
import { AuthContext } from "../contexts/userContext"
import { VideoContext } from "../contexts/videoContext"

const useUpdateVideo = (
    videoId,
    title,
    setTitle,
    thumbnail,
    setThumbnail,
    embedId,
    setEmbedId,
    category,
    setCategory,
    setVideos, // User Videos
) => {
    const { authData } = useContext(AuthContext)
    const { setVideosData } = useContext(VideoContext)

    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        if (authData && isSubmitted) {
            const reqUpdateData = async () => {
                const res = await fetch(
                    `${serverDomain}/api/videos/${videoId}`,
                    {
                        method: "PUT",
                        headers: {
                            Authorization: `Bearer ${authData.token}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            title,
                            thumbnail: thumbnail,
                            embedId,
                            category: {
                                name: category,
                            },
                        }),
                    },
                )
                const status = await res.status
                const data = await res.json()
                if (status === 200) {
                    setIsSubmitted(false)
                    setVideos(null)
                }
                setIsSubmitted(false)
            }
            reqUpdateData()
        }
    }, [
        videoId,
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
        setVideosData,
    ])

    return {
        isSuccess,
        setIsSuccess,
        message,
        setMessage,
        isSubmitted,
        setIsSubmitted,
    }
}

export default useUpdateVideo
