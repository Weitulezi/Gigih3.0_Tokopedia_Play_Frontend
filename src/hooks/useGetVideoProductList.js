import { useEffect } from "react"

const useGetVideoProductList = (videoId, setProducts) => {
    useEffect(() => {
        if (videoId) {
            const getProducts = async () => {
                const res = await fetch(`/api/products?video=${videoId}`)

                const status = await res.status
                const data = await res.json()

                if (status === 200) {
                    if (data) {
                        setProducts(data)
                    }
                }
            }
            getProducts()
        }
    }, [videoId, setProducts])
}

export default useGetVideoProductList
