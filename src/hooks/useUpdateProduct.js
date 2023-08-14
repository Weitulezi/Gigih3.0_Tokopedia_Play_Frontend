import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../contexts/userContext"
import { VideoContext } from "../contexts/videoContext"

const useUpdateProduct = (
    productId,
    title,
    image,
    price,
    link,
    videoId,
    setUserProducts,
) => {
    const { authData } = useContext(AuthContext)

    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        if (authData && isSubmitted) {
            const reqUpdateProduct = async () => {
                const res = await fetch(`/api/products`, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${authData.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        productId,
                        title,
                        image,
                        price: Number(price),
                        link,
                        videoId,
                    }),
                })
                const status = await res.status
                const data = await res.json()
                if (status === 200) {
                    console.log(data)
                    setUserProducts(null)
                    setIsSubmitted(false)
                }
                setIsSubmitted(false)
            }
            reqUpdateProduct()
        }
    }, [
        videoId,
        authData,
        title,
        image,
        link,
        videoId,
        productId,
        isSubmitted,
        setUserProducts,
    ])

    return {
        isSuccess,
        setIsSuccess,
        message,
        setMessage,
        isSubmitted,
        setIsSubmitted,
        setUserProducts,
    }
}

export default useUpdateProduct
