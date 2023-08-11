import React, { useState } from "react"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"

const CommentSection = ({ videoId }) => {
    return (
        <div
            className="w-[20%] h-[90vh] box-border  p-[15px] border-2 border-black-40"
            style={{
                diplay: "flex",
                alignItems: "center",
                flexDirection: "column",
                flexGrow: "0",
            }}
        >
            <h4 className="text-white text-center font-bold h-[5%] box-border border-b-2 border-black-40">
                Comments
            </h4>
            <CommentList videoId={videoId} />
            <CommentForm />
        </div>
    )
}

export default CommentSection
