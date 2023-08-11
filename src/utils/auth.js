const createUser = async (
    email,
    setEmail,
    password,
    setPassword,
    setMessage,
    setSuccess,
) => {
    const res = await fetch(`/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
    const status = await res.status
    const data = await res.json()

    if (status === 201) {
        setEmail("")
        setPassword("")
        setMessage(data.message)
        setSuccess(true)
    } else if (status === 400) {
        setMessage(data.message)
        setSuccess(false)
    } else {
        setMessage("Unable to create user, try again later!")
        setSuccess(false)
    }
}

const loginUser = async (
    email,
    password,
    setMessage,
    setSuccess,
    setAuthData,
) => {
    const res = await fetch(`/api/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
    const status = await res.status
    const data = await res.json()

    if (data) {
        if (status === 200) {
            setAuthData({ token: data.token, user: data.user })
            window.localStorage.setItem("authData", JSON.stringify(data))
            setSuccess(true)
        } else if (status === 400) {
            setSuccess(false)
            setMessage(data.message)
        }
    }
}

const logoutUser = async (setAuthData, history) => {
    setAuthData(null)
    window.localStorage.removeItem("authData")
    history.push(`/login`)
}

export { createUser, loginUser, logoutUser }
