import React, { useContext } from "react"
import { useState } from "react"
import { FaSignature } from "react-icons/fa"
import { BsFillKeyFill } from "react-icons/bs"
import { CgImage } from "react-icons/cg"
import useCreateVideo from "../../hooks/useCreateVideo"
import { AuthContext } from "../../contexts/userContext"
import { VideoContext } from "../../contexts/videoContext"

const VideoForm = () => {
    const [title, setTitle] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [embedId, setEmbedId] = useState("")
    const [category, setCategory] = useState("")
    const [isSubmitted, setIsSubmitted] = useState("")
    // For dynamic respond
    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState("")

    useCreateVideo(
        title,
        setTitle,
        thumbnail,
        setThumbnail,
        embedId,
        setEmbedId,
        category,
        setCategory,
        isSubmitted,
        setIsSubmitted,
        setIsSuccess,
        setMessage,
    )

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <div
            style={{ boxShadow: "4px 10px 27px 2px rgba(0,0,0,1)" }}
            className="w-[100%] p-[10px] px-[15px] border-[2px] border-black-40 rounded-md"
        >
            <form
                onSubmit={(e) => handleFormSubmit(e)}
                className=""
                style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                }}
            >
                <div className="">
                    <label htmlFor="title">Title</label>
                </div>
                <div
                    className="bg-black  border-[2px] border-black-40 rounded-[6px]"
                    style={{
                        display: "flex",
                        columnGap: "10px",
                        alignItems: "center",
                    }}
                >
                    <span className="text-black-140 text-[22px] p-[10px] border-r-2 border-black-40">
                        <FaSignature />
                    </span>
                    <input
                        autoFocus
                        type="text"
                        name="title"
                        autoComplete="off"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        spellCheck="false"
                        className="w-full bg-black border-[none] outline-none px-[5px]"
                    />
                </div>
                <div className="">
                    <label htmlFor="thumbnail">Thumbnail</label>
                </div>
                <div
                    className="bg-black  border-[2px] border-black-40 rounded-[6px]"
                    style={{ display: "flex", columnGap: "10px" }}
                >
                    <span className="text-black-140 text-[22px] p-[10px] border-r-2 border-black-40">
                        <CgImage />
                    </span>
                    <input
                        type="text"
                        name="thumbnail"
                        autoComplete="off"
                        required
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                        spellCheck="false"
                        className="w-full bg-black border-[none] outline-none px-[5px]"
                    />
                </div>
                <label htmlFor="embedId">Embed Id</label>
                <div
                    className="text-black-140 bg-black border-[2px] border-black-40 rounded-[6px]"
                    style={{ display: "flex", columnGap: "10px" }}
                >
                    <span className="text-[22px] p-[10px] border-r-2 border-black-40">
                        <BsFillKeyFill />
                    </span>
                    <input
                        type="text"
                        name="embedId"
                        autoComplete="off"
                        required
                        value={embedId}
                        onChange={(e) => setEmbedId(e.target.value)}
                        spellCheck="false"
                        className="w-full bg-black text-white border-[none] outline-none px-[5px]"
                    />
                </div>
                <div>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        id=""
                        required
                        className="bg-black p-[10px] my-[6px] border-2 border-black-40 rounded-md"
                    >
                        <option className="p-[20px] text-lg hidden" value="">
                            Select a category
                        </option>
                        <option
                            className="p-[20px] text-lg"
                            value="Electronics"
                        >
                            Electronics
                        </option>
                        <option className="p-[20px] text-lg" value="Clothes">
                            Clothes
                        </option>
                        <option
                            className="p-[10px] text-lg"
                            value="Foods and Drinks"
                        >
                            Foods and Drinks
                        </option>
                    </select>
                </div>
                <button>
                    <div className="flex justify-center bg-mainGreen p-[6px] rounded-lg text-black-40 font-bold">
                        Create Video
                    </div>
                </button>
                {message !== "" && (
                    <div style={{ color: isSuccess ? "#00CC33" : "red" }}>
                        <h3>{message}</h3>
                    </div>
                )}
            </form>
        </div>
    )
}

export default VideoForm
