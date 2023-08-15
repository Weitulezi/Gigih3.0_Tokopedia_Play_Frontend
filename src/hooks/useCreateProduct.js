import React, { useContext, useEffect, useState } from "react"
import { serverDomain } from "../constants/path"
import { AuthContext } from "../contexts/userContext"

const useCreateProduct = (
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
) => {
    const { authData } = useContext(AuthContext)
    const [isSubmited, setIsSubmitted] = useState(false)
    const [isLoading, setIsloading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (authData && isSubmited) {
            const reqCreateProduct = async () => {
                const res = await fetch(`${serverDomain}/api/products`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${authData.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        image,
                        price: Number(price),
                        link,
                        videoId,
                    }),
                })
                const status = await res.status
                const data = await res.json()
                if (status === 201) {
                    setMessage(data.message)
                    setTitle("")
                    setImage("")
                    setLink("")
                    setPrice("")
                    setVideoId("")
                    setIsSuccess(true)
                }
                setIsSubmitted(false)
            }
            reqCreateProduct()
        }
    }, [
        authData,
        title,
        image,
        price,
        link,
        videoId,
        setIsloading,
        setIsSubmitted,
        setMessage,
        isSubmited,
        setIsSuccess,
    ])

    return { isLoading, isSuccess, message, setIsSubmitted }
}

export default useCreateProduct
