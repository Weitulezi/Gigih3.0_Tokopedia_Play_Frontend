import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/userContext"

const useGetUserProductList = (userProducts, setUserProducts) => {
    const { authData } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (authData && userProducts === null) {
            setLoading(true)
            const getUserProducts = async () => {
                const res = await fetch(`/api/users/products`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${authData.token}`,
                    },
                })
                const status = await res.status
                const data = await res.json()
                if (status === 200) {
                    setUserProducts(data)
                }
                setLoading(false)
            }
            getUserProducts()
        }
    }, [authData, userProducts, setUserProducts, setLoading])

    return { loading }
}

export default useGetUserProductList
