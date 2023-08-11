import React, { useState } from "react"
import useGetVideoCommentList from "../../hooks/useGetVideoCommentList"
import CommentBox from "./CommentBox"

const CommentList = ({ videoId }) => {
    const [comments, setComments] = useState(null)

    useGetVideoCommentList(videoId, setComments)

    return (
        <div
            className="h-[80%] box-border overflow-scroll overflow-x-hidden"
            style={{ display: "flex", flexDirection: "column", rowGap: "18px" }}
        >
            {comments &&
                comments.map((item) => (
                    <CommentBox
                        key={item._id}
                        email={item.user.email}
                        content={item.content}
                    />
                ))}
        </div>
    )
}

export default CommentList
