import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/userContext"

const useDeleteProduct = (productId, setUserProducts) => {
    const { authData } = useContext(AuthContext)
    const [deleteProduct, setDeleteProduct] = useState(false)

    useEffect(() => {
        if (deleteProduct && authData) {
            const reqDeleteVideo = async () => {
                const res = await fetch(`/api/products/${productId}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${authData.token}`,
                    },
                })
                const status = await res.status
                if (status === 200) {
                    setUserProducts(null)
                }
                setDeleteProduct(false)
            }
            reqDeleteVideo()
        }
    }, [deleteProduct, productId, setDeleteProduct, setUserProducts])

    return { deleteProduct, setDeleteProduct, setUserProducts }
}

export default useDeleteProduct
