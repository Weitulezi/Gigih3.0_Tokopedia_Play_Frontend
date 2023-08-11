import React, { useContext, useRef, useState } from "react"
import { AuthContext } from "../../contexts/userContext"
import useCreateComment from "../../hooks/useCreateComment"

const CommentForm = ({ videoId, setComments }) => {
    const { authData } = useContext(AuthContext)

    const textAreaRef = useRef(null)
    const [content, setContent] = useState("")
    const [createComment, setCreateComment] = useState(false)

    useCreateComment(
        createComment,
        setCreateComment,
        authData,
        videoId,
        setComments,
        content,
        setContent,
    )

    const handleForm = (e) => {
        e.preventDefault()
        setCreateComment(true)
        textAreaRef.current.focus()
    }

    return (
        <div className="w-full h-[15%] flex-column flex-1">
            <form
                action=""
                onSubmit={(e) => handleForm(e)}
                className="w-full h-full"
            >
                <textarea
                    ref={textAreaRef}
                    className="w-full outline-none h-[70%] bg-black resize-none border-2 border-black-40 rounded-md py-[10px] px-[15px] overflow-hidden placeholder:text-black-40 text-black-140"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    spellCheck="false"
                    placeholder="Add comment..."
                ></textarea>
                <button className="w-full h-[30%] bg-[#00CC33] text-[1rem] text-black font-bold rounded-md">
                    Post a comment
                </button>
            </form>
        </div>
    )
}

export default CommentForm
