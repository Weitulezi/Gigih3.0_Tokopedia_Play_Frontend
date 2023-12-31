import { useEffect } from "react"
import { serverDomain } from "../constants/path"

const useCreateComment = (
    createComment,
    setCreateComment,
    authData,
    videoId,
    setComments,
    content,
    setContent,
) => {
    useEffect(() => {
        if (createComment && authData && content !== "") {
            setContent("")
            const createComment = async () => {
                const res = await fetch(`${serverDomain}/api/comments`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${authData.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ content, videoId }),
                })
                const status = await res.status
                const data = await res.json()
                if (status === 201 && data) {
                    setComments((comments) => [...comments, data])
                    setCreateComment(false)
                }
            }
            createComment()
        }
    }, [
        createComment,
        setComments,
        authData,
        videoId,
        setComments,
        content,
        setContent,
    ])
}

export default useCreateComment
