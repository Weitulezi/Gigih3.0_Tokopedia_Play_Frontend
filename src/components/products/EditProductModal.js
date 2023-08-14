import React, { useState } from "react"
import { Modal } from "flowbite-react"
import { FaSignature } from "react-icons/fa"
import { BsFillKeyFill } from "react-icons/bs"
import { CgImage } from "react-icons/cg"
import { AiOutlineLink } from "react-icons/ai"
import useUpdateProduct from "../../hooks/useUpdateProduct"
import useGetUserVideoList from "../../hooks/useGetUserVideoList"
import { isStringValidPriceNumber } from "../../utils/validation"

const EditProductModal = ({
    openModal,
    setOpenModal,
    _id,
    oldTitle,
    oldImage,
    oldPrice,
    oldLink,
    oldVideoId,
    setUserProducts,
}) => {
    const [title, setTitle] = useState(oldTitle)
    const [image, setImage] = useState(oldImage)
    const [price, setPrice] = useState(oldPrice)
    const [link, setLink] = useState(oldLink)
    const [videoId, setVideoId] = useState(oldVideoId)

    const { loading, userVideos, setUserVideos } = useGetUserVideoList()

    const { isSuccess, message, setIsSubmitted } = useUpdateProduct(
        _id,
        title,
        image,
        price,
        link,
        videoId,
        setUserProducts,
    )

    const handlePriceNumber = (e) => {
        e.preventDefault()
        const value = e.target.value
        const validInput = isStringValidPriceNumber(value)
        validInput ? setPrice(value) : value === "" && setPrice("")
    }

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
                        <h3 className="text-white">Update Product</h3>
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
                                <label htmlFor="image">Image</label>
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
                                    name="image"
                                    autoComplete="off"
                                    required
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    spellCheck="false"
                                    className="w-full bg-black border-[none] outline-none px-[5px]"
                                />
                            </div>
                            <label htmlFor="price">Price</label>
                            <div
                                className="text-black-140 bg-black border-[2px] border-black-40 rounded-[6px]"
                                style={{ display: "flex", columnGap: "10px" }}
                            >
                                <span className="text-[22px] p-[10px] border-r-2 border-black-40">
                                    <BsFillKeyFill />
                                </span>
                                <input
                                    type="text"
                                    name="price"
                                    autoComplete="off"
                                    required
                                    value={price}
                                    onChange={(e) => handlePriceNumber(e)}
                                    spellCheck="false"
                                    className="w-full bg-black text-white border-[none] outline-none px-[5px]"
                                />
                            </div>
                            <label htmlFor="link">Link</label>
                            <div
                                className="text-black-140 bg-black border-[2px] border-black-40 rounded-[6px]"
                                style={{ display: "flex", columnGap: "10px" }}
                            >
                                <span className="text-[22px] p-[10px] border-r-2 border-black-40">
                                    <AiOutlineLink />
                                </span>
                                <input
                                    type="text"
                                    name="link"
                                    autoComplete="off"
                                    required
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    spellCheck="false"
                                    className="w-full bg-black text-white border-[none] outline-none px-[5px]"
                                />
                            </div>
                            <div className="flex items-center gap-x-[10px]">
                                <h3>Video</h3>
                                <select
                                    defaultValue={videoId}
                                    id=""
                                    onChange={(e) => setVideoId(e.target.value)}
                                    required
                                    className="bg-black p-[10px] my-[6px] border-2 border-black-40 rounded-md"
                                >
                                    {userVideos &&
                                        userVideos.map((item) => (
                                            <option
                                                key={item._id}
                                                className="p-[20px] text-lg"
                                                value={`${item._id}`}
                                            >
                                                {item.title}
                                            </option>
                                        ))}
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

export default EditProductModal
