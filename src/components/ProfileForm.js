import { useContext, useState } from "react"
import { FaSignature } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { AuthContext } from "../contexts/userContext"
import { BsFillKeyFill } from "react-icons/bs"
import useUpdateProfile from "../hooks/useUpdateProfile"

const ProfileForm = () => {
    const { authData, setAuthData } = useContext(AuthContext)
    const [username, setUsername] = useState(authData.user.username)
    const [email, setEmail] = useState(authData.user.email)
    const [password, setPassword] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    useUpdateProfile(
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
    )

    const handleProfileUpdate = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <div className="w-[100%] p-[10px] px-[15px] border-[2px] border-black-40 rounded-md">
            <form
                className=""
                style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                }}
            >
                <div className="">
                    <label htmlFor="username">Username</label>
                </div>
                <div
                    className="bg-black  border-[2px] border-black-40 rounded-[6px]"
                    style={{
                        display: "flex",
                        columnGap: "10px",
                        alignItems: "center",
                    }}
                >
                    <span className="text-black-140 text-[22px] p-[10px] border-r-2 border-black-40">
                        <FaSignature />
                    </span>
                    <input
                        autoFocus
                        type="text"
                        name="username"
                        autoComplete="off"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        spellCheck="false"
                        className="w-full bg-black border-[none] outline-none px-[5px]"
                    />
                </div>
                <div className="">
                    <label htmlFor="email">Email</label>
                </div>
                <div
                    className="bg-black  border-[2px] border-black-40 rounded-[6px]"
                    style={{ display: "flex", columnGap: "10px" }}
                >
                    <span className="text-black-140 text-[22px] p-[10px] border-r-2 border-black-40">
                        <AiOutlineMail />
                    </span>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        spellCheck="false"
                        className="w-full bg-black border-[none] outline-none px-[5px]"
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
                        className="w-full bg-black border-[none] outline-none px-[5px]"
                    />
                </div>

                <button onClick={(e) => handleProfileUpdate(e)}>
                    <div className="flex justify-center bg-mainGreen p-[6px] rounded-lg text-black-40 font-bold">
                        Update Profile
                    </div>
                </button>
            </form>
        </div>
    )
}

export default ProfileForm
