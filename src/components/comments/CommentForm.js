import React, { useState } from "react"

const CommentForm = () => {
    const [content, setContent] = useState("")

    const handleForm = (e) => {
        e.preventDefault()
        setContent("")
    }

    return (
        <div className="w-full h-[15%] flex-column flex-1">
            <form
                action=""
                onSubmit={(e) => handleForm(e)}
                className="w-full h-full"
            >
                <textarea
                    className="w-full h-[70%] bg-black resize-none border-2 border-black-40 rounded-md py-[10px] px-[15px] overflow-hidden"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    spellCheck="false"
                    id=""
                ></textarea>
                <button className="w-full h-[30%] bg-[#00CC33] text-[1rem] text-black font-bold rounded-md">
                    Post a comment
                </button>
            </form>
        </div>
    )
}

export default CommentForm
