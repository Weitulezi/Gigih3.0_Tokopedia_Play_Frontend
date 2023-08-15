import { useEffect } from "react"
import { serverDomain } from "../constants/path"

const useGetVideoProductList = (videoId, setProducts, setLoading) => {
    useEffect(() => {
        if (videoId) {
            setLoading(true)
            const getProducts = async () => {
                const res = await fetch(
                    `${serverDomain}/api/products?video=${videoId}`,
                )

                const status = await res.status
                const data = await res.json()

                if (status === 200) {
                    if (data) {
                        setProducts(data)
                        setLoading(false)
                    }
                }
            }
            getProducts()
        }
    }, [videoId, setProducts, setLoading])
}

export default useGetVideoProductList
