import React, { useState } from "react"
import { Modal } from "flowbite-react"
import { FaSignature } from "react-icons/fa"
import { BsFillKeyFill } from "react-icons/bs"
import { CgImage } from "react-icons/cg"
import useUpdateVideo from "../../hooks/useUpdateVideo"

const EditVideoModal = ({
    openModal,
    setOpenModal,
    _id,
    oldTitle,
    oldThumbnail,
    oldEmbedId,
    oldCategory,
    setUserVideos,
}) => {
    const [title, setTitle] = useState(oldTitle)
    const [thumbnail, setThumbnail] = useState(oldThumbnail)
    const [embedId, setEmbedId] = useState(oldEmbedId)
    const [category, setCategory] = useState(oldCategory)

    const {
        isSuccess,
        setIsSuccess,
        message,
        setMessage,
        isSubmitted,
        setIsSubmitted,
    } = useUpdateVideo(
        _id,
        title,
        setTitle,
        thumbnail,
        setThumbnail,
        embedId,
        setEmbedId,
        category,
        setCategory,
        setUserVideos,
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <Modal
            className="bg-black"
            dismissible
            show={openModal === "dismissible"}
            onClose={() => setOpenModal(undefined)}
        >
            <div className="border-2 border-black-40 rounded-md ">
                <Modal.Header className="bg-black  text-white border-b-2 border-b-black-40 ">
                    <div className="text-lg text-center font-bold">
                        <h3 className="text-white">Update Video</h3>
                    </div>
                </Modal.Header>

                <Modal.Body className="bg-black border-black-40">
                    <div className=" text-white">
                        <form
                            onSubmit={(e) => handleSubmit(e)}
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
                                    className="w-full bg-black focus:border-red border-[none] outline-none px-[5px]"
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
                                    onChange={(e) =>
                                        setThumbnail(e.target.value)
                                    }
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
                                    defaultValue={category}
                                    id=""
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    required
                                    className="bg-black p-[10px] my-[6px] border-2 border-black-40 rounded-md"
                                >
                                    <option
                                        className="p-[20px] text-lg hidden"
                                        value=""
                                    >
                                        Select a category
                                    </option>
                                    <option
                                        className="p-[20px] text-lg"
                                        value="Electronics"
                                    >
                                        Electronics
                                    </option>
                                    <option
                                        className="p-[20px] text-lg"
                                        value="Clothes"
                                    >
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
                            {message !== "" && (
                                <div
                                    style={{
                                        color: isSuccess ? "#00CC33" : "red",
                                    }}
                                >
                                    <h3>{message}</h3>
                                </div>
                            )}
                            <button>
                                <div className="bg-mainGreen text-black  px-[12px] py-[6px] rounded-lg font-bold">
                                    Submit
                                </div>
                            </button>
                        </form>
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    )
}

export default EditVideoModal
