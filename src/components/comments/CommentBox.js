import React from "react"

const CommentBox = ({ email, content }) => {
    return (
        <div className="flex-column">
            <h3 className="text-[14px] text-[#00CC33] w-max border-b-[2px] border-black-40">
                {email}
            </h3>
            <p className="text-[14px] text-black-150 w-max border-b-[2px] border-black-40">
                {content}
            </p>
        </div>
    )
}

export default CommentBox
