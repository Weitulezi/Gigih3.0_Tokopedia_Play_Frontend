import React, { useState } from "react"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"

const CommentSection = ({ videoId }) => {
    const [comments, setComments] = useState(null)

    return (
        <div
            className="w-[20%] h-[90vh] box-border p-[15px] pt-[5px] border-2 border-black-40"
            style={{
                diplay: "flex",
                alignItems: "center",
                flexDirection: "column",
                flexGrow: "0",
            }}
        >
            <h4 className="text-white text-center font-bold h-[5%] box-border">
                Comments
            </h4>
            <CommentList
                videoId={videoId}
                comments={comments}
                setComments={setComments}
            />
            <CommentForm videoId={videoId} setComments={setComments} />
        </div>
    )
}

export default CommentSection
