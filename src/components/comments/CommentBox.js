import React from "react"
import { BiUserCircle } from "react-icons/bi"

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
            <div className="flex items-center gap-x-1 text-black-100">
                <span className="text-[18px]">
                    <BiUserCircle />
                </span>
                <h3 className="text-[14px]  w-max">{email}</h3>
            </div>
            <div className="flex break-words text-[14px] text-black-200">
                {content}
            </div>
        </div>
    )
}

export default CommentBox
