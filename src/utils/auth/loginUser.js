const loginUser = async (
    email,
    setEmail,
    password,
    setPassword,
    setMessage,
    setSuccess,
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

    if (status === 200) {
        console.log(data)
    } else if (status === 400) {
    } else {
    }
}

export default loginUser
