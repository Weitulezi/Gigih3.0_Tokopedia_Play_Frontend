import React from "react"
import { useState } from "react"
import { FaSignature } from "react-icons/fa"
import { AiOutlineLink } from "react-icons/ai"
import { GiPriceTag } from "react-icons/gi"
import { CgImage } from "react-icons/cg"
import useGetUserVideoList from "../../hooks/useGetUserVideoList"
import useCreateProduct from "../../hooks/useCreateProduct"
import { isStringValidPriceNumber } from "../../utils/validation"

const ProductForm = () => {
    const { userVideos } = useGetUserVideoList()

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState(1)
    const [link, setLink] = useState("")
    const [videoId, setVideoId] = useState("")

    // Hook to create product
    const { isLoading, isSuccess, message, setIsSubmitted } = useCreateProduct(
        title,
        setTitle,
        image,
        setImage,
        price,
        setPrice,
        link,
        setLink,
        videoId,
        setVideoId,
    )

    const handlePrice = (e) => {
        e.preventDefault()
        const value = e.target.value
        const validInput = isStringValidPriceNumber(value)
        validInput ? setPrice(value) : value === "" && setPrice("")
    }

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
                        key="title"
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
                    <label htmlFor="image">Image Url</label>
                </div>
                <div
                    className="bg-black  border-[2px] border-black-40 rounded-[6px]"
                    style={{ display: "flex", columnGap: "10px" }}
                >
                    <span className="text-black-140 text-[22px] p-[10px] border-r-2 border-black-40">
                        <CgImage />
                    </span>
                    <input
                        key="image"
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
                <label htmlFor="price">Price (Rupiah)</label>
                <div
                    className="text-black-140 bg-black border-[2px] border-black-40 rounded-[6px]"
                    style={{ display: "flex", columnGap: "10px" }}
                >
                    <span className="text-[22px] p-[10px] border-r-2 border-black-40">
                        <GiPriceTag />
                    </span>
                    <input
                        key="price"
                        type="text"
                        name="price"
                        autoComplete="off"
                        required
                        value={price}
                        onChange={(e) => handlePrice(e)}
                        spellCheck="false"
                        className="w-full bg-black text-white border-[none] outline-none px-[5px]"
                    />
                </div>
                <label htmlFor="link">Product's Link (Tokopedia)</label>
                <div
                    className="text-black-140 bg-black border-[2px] border-black-40 rounded-[6px]"
                    style={{ display: "flex", columnGap: "10px" }}
                >
                    <span className="text-[22px] p-[10px] border-r-2 border-black-40">
                        <AiOutlineLink />
                    </span>
                    <input
                        key="link"
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
                <div>
                    <select
                        id=""
                        onChange={(e) => setVideoId(e.target.value)}
                        required
                        className="bg-black p-[10px] my-[6px] border-2 border-black-40 rounded-md"
                    >
                        <option className="p-[20px] text-lg hidden" value="">
                            Select Video
                        </option>
                        {userVideos &&
                            userVideos.map((item) => (
                                <option
                                    key={item._id}
                                    className="p-[20px] text-lg"
                                    value={item._id}
                                >
                                    {item.title}
                                </option>
                            ))}
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

export default ProductForm
