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

export default createUser
