import React from "react"
import { Link } from "react-router-dom"

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
                        <h1 className="text-2xl m-0 text-center">
                            Tokopedia Play
                        </h1>
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
                    <input
                        type="email"
                        name="email"
                        className="bg-black border-[2px] border-black-40 py-[6px] px-[12px] rounded-[6px]"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="bg-black border-[2px] border-black-40 py-[6px] px-[12px] rounded-[6px]"
                    />
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
