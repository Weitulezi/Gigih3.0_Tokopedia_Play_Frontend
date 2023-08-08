import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { PiVideoBold } from "react-icons/pi"
import LoginForm from "../components/LoginForm"

const LoginPage = () => {
    const handleForm = (e) => {
        e.preventDefault()
    }
    return (
        <div className="flex justfiy-center items-center min-h-[100vh] text-white">
            <div
                className="lg:w-[30%] md:w-[70%] w-[80%] m-[auto] border-[2px] border-black-40 p-8 rounded-lg"
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
                <LoginForm />
                <h5 className="w-full text-sm font-thin text-center">
                    Donn't have an account yet? Sign in{" "}
                    <Link to="/signin">
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

export default LoginPage
