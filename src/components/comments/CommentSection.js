import React, { useState } from "react"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"
import { AiOutlineComment } from "react-icons/ai"

const CommentSection = ({ videoId }) => {
    const [comments, setComments] = useState(null)

    return (
        <div
            className="lg:flex md:flex flex lg:w-[25%] md:w-[25%] w-[90%] m-auto h-[90vh] box-border p-[15px] pt-[0px] border-2 border-black-40"
            style={{
                diplay: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <div className="h-[7%] w-[100%] flex gap-x-[5px] items-center justify-center">
                <h4 className="text-white font-bold box-border">Comments</h4>
                <span className="text-[20px]">
                    <AiOutlineComment />
                </span>
            </div>
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
