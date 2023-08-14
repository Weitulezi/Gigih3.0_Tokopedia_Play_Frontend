import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PiVideoBold } from "react-icons/pi"
import LoginForm from "../components/LoginForm"
import { AuthContext } from "../contexts/userContext"
import { useHistory } from "react-router-dom"
import useRedirectLoggedInUser from "../hooks/useRedirectLoggedInUser"

const LoginPage = () => {
    const { authData } = useContext(AuthContext)
    const history = useHistory()

    useRedirectLoggedInUser(authData, history)

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
                    boxShadow:
                        "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
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
