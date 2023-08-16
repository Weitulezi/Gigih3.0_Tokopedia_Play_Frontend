import { useEffect } from "react"
import { serverDomain } from "../constants/path"

const useGetVideoCommentList = (videoId, setComments) => {
    useEffect(() => {
        if (videoId) {
            console.log("Get comments")
            const getComments = async () => {
                const res = await fetch(
                    `${serverDomain}/api/videos/${videoId}/comments`,
                )
                const status = await res.status
                const data = await res.json()
                if (status === 200) {
                    if (data) {
                        setComments(data)
                    }
                }
            }
            getComments()
        }
    }, [videoId, setComments])
}

export default useGetVideoCommentList
