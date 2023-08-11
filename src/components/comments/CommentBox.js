import React from "react"

const CommentBox = ({ email, content, isLastChild }) => {
    return (
        <div
            className="py-[10px] px-[10px] border-x-[1px] border-t-[1px] border-black-40"
            style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
                borderBottom: isLastChild ? "1px solid rgb(40, 40, 40)" : "",
            }}
        >
            <h3 className="text-[14px] text-[#00CC33] w-max">{email}</h3>
            <div className="flex break-words text-[14px] text-black-150">
                {content}
            </div>
        </div>
    )
}

export default CommentBox
