import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { PiVideoBold } from "react-icons/pi"

const SignInPage = () => {
    const handleForm = (e) => {
        e.preventDefault()
    }
    return (
        <div className="flex justfiy-center items-center min-h-[100vh] text-white">
            <div
                className="lg:w-[30%] md:w-[70%] w-[80%] m-[auto] border-[2px] border-black-40 p-8"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    rowGap: "25px",
                }}
            >
                <div>
                    <Link to="/">
                        <div className="flex items-center gap-x-2">
                            <span className="text-3xl">
                                <PiVideoBold />
                            </span>
                            <h1 className="text-2xl m-0 text-center">
                                Tokopedia Play
                            </h1>
                        </div>
                    </Link>
                </div>
                <form
                    onSubmit={handleForm}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "10px",
                        width: "100%",
                    }}
                >
                    <label htmlFor="email">Email</label>
                    <div
                        className="bg-black border-[2px] border-black-40 rounded-[6px]"
                        style={{ display: "flex", columnGap: "10px" }}
                    >
                        <span className="text-black-140 text-[22px] p-[10px] border-r-2 border-black-40">
                            <AiOutlineMail />
                        </span>
                        <input
                            type="email"
                            name="email"
                            className="w-full bg-black border-[none] outline-none px-[5px]"
                        />
                    </div>
                    <label htmlFor="password">Password</label>
                    <div
                        className="text-black-140 bg-black border-[2px] border-black-40 rounded-[6px]"
                        style={{ display: "flex", columnGap: "10px" }}
                    >
                        <span className="text-[22px] p-[10px] border-r-2 border-black-40">
                            <RiLockPasswordLine />
                        </span>
                        <input
                            type="password"
                            name="password"
                            className="w-full bg-black border-[none] outline-none px-[5px]"
                        />
                    </div>
                    <button className="flex justify-center w-full text-black font-bold bg-[#00CC33] mt-[15px] p-[6px] rounded-[6px]">
                        Create account
                    </button>
                </form>
                <h5 className="w-full text-sm font-thin text-center">
                    Already have an account? login{" "}
                    <Link to="/login">
                        <span className="text-[#00CC33]">here</span>
                    </Link>
                </h5>
                <div className="flex items-center gap-x-[20px]">
                    <div>
                        <h1 className="text-xl font-medium text-center">
                            Powered by :
                        </h1>
                    </div>
                    <div className="">
                        <img
                            width="150px"
                            src="/assets/gotoimpact-logo.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
