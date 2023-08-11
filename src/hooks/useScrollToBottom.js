import { useEffect } from "react"

const useScrollToBottom = (commentListRef, comments) => {
    useEffect(() => {
        if (commentListRef.current) {
            commentListRef.current.scrollTop =
                commentListRef.current.scrollHeight
        }
    }, [commentListRef.current, comments])
}

export default useScrollToBottom
