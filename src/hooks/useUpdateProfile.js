import React, { useEffect } from "react"

const useUpdateProfile = (
    authData,
    setAuthData,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    isSubmitted,
    setIsSubmitted,
) => {
    useEffect(() => {
        if (authData && isSubmitted) {
            const updateProfile = async () => {
                console.log("Run")
                const res = await fetch(`/api/users`, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${authData.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                    }),
                })
                const status = await res.status
                const data = await res.json()
                console.log(data)
                if (status === 200 && data) {
                    setAuthData(({ token }) => ({
                        user: {
                            _id: data._id,
                            username: data.username,
                            email: data.email,
                        },
                        token: token,
                    }))
                    setUsername(data.username)
                    setEmail(data.email)
                    setPassword("")
                }
                setIsSubmitted(false)
            }
            updateProfile()
        }
    }, [authData, isSubmitted, setIsSubmitted])
}

export default useUpdateProfile
