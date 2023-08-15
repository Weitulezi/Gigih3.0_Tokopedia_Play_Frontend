import React, { useContext, useState } from "react"

import { BsFillKeyFill } from "react-icons/bs"
import { FaSignature } from "react-icons/fa"
import { AuthContext } from "../contexts/userContext"

import { loginUser } from "../utils/auth"

const LoginForm = () => {
    const { setAuthData } = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState("")

    const handleForm = (e) => {
        e.preventDefault()
        loginUser(username, password, setMessage, setSuccess, setAuthData)
    }

    const renderMessage = () => {
        if (!success && message !== "") {
            return <p className="text-red-500">{message}</p>
        } else if (success && message !== "") {
            return <p className="text-[#00CC33]">{message}</p>
        }
        return <p></p>
    }

    return (
        <form
            onSubmit={handleForm}
            style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                width: "100%",
            }}
        >
            <div>{renderMessage()}</div>
            <label htmlFor="username">Username</label>
            <div
                className="bg-black border-[2px] border-black-40 rounded-[6px]"
                style={{ display: "flex", columnGap: "10px" }}
            >
                <span className="text-black-140 text-[22px] p-[10px] border-r-2 border-black-40">
                    <FaSignature />
                </span>
                <input
                    autoFocus
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                    required
                    spellCheck="false"
                    className="w-full bg-black border-[none] outline-none lg:px-[5px] md:px-[5px] px-[5px]"
                />
            </div>
            <label htmlFor="password">Password</label>
            <div
                className="text-black-140 bg-black border-[2px] border-black-40 rounded-[6px]"
                style={{ display: "flex", columnGap: "10px" }}
            >
                <span className="text-[22px] p-[10px] border-r-2 border-black-40">
                    <BsFillKeyFill />
                </span>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black border-[none] outline-none lg:px-[5px] md:px-[5px] px-[5px]"
                />
            </div>
            <button className="flex justify-center w-full text-black font-bold bg-[#00CC33] mt-[15px] p-[6px] rounded-[6px]">
                Login
            </button>
        </form>
    )
}

export default LoginForm
