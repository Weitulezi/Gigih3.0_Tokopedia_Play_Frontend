import React, { useEffect, useRef } from "react"
import useGetVideoCommentList from "../../hooks/useGetVideoCommentList"
import useScrollToBottom from "../../hooks/useScrollToBottom"
import CommentBox from "./CommentBox"

const CommentList = ({ videoId, comments, setComments }) => {
    const commentListRef = useRef()

    useGetVideoCommentList(videoId, setComments)

    // Scroll to bottom when comment is added
    useScrollToBottom(commentListRef, comments)

    return (
        <div
            ref={commentListRef}
            className=" box-border mb-[10px]  overflow-scroll overflow-x-hidden"
            style={{
                width: "100%",
                height: "calc(78% - 11px)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {comments &&
                comments.map((item, index) => (
                    <CommentBox
                        key={item._id}
                        email={item.user.email}
                        content={item.content}
                        isLastChild={
                            comments.length === index + 1 ? true : false
                        }
                    />
                ))}
        </div>
    )
}

export default CommentList
