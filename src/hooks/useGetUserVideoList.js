import { useEffect, useState, useContext } from "react"
import { UserVideosContext } from "../contexts/videoContext"
import { AuthContext } from "../contexts/userContext"

const useGetUserVideoList = () => {
    const { authData } = useContext(AuthContext)
    const { userVideos, setUserVideos } = useContext(UserVideosContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (authData && userVideos === null) {
            setLoading(true)
            const getUserVideos = async () => {
                const res = await fetch(`/api/users/videos`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${authData.token}`,
                    },
                })
                const status = await res.status
                const data = await res.json()
                if (status === 200) {
                    setUserVideos(data)
                }
                setLoading(false)
            }
            getUserVideos()
        }
    }, [authData, userVideos, setUserVideos, setLoading])

    return { loading, userVideos, setUserVideos, authData, setLoading }
}

export default useGetUserVideoList
