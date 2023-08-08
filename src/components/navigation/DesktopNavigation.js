import React from "react"
import { Link } from "react-router-dom"
import { CgLogIn } from "react-icons/cg"
import { VscSignIn } from "react-icons/vsc"

const DesktopNavigation = () => {
    return (
        <div className="w-[85%] flex justify-between items-center m-auto">
            <Link to="/">
                <div className="flex items-center gap-x-2">
                    <img
                        width="30px"
                        height="auto"
                        src="/assets/tokopedia_logo.png"
                        alt="Tokopedia Logo"
                    />
                    <h1 className="font-bold text-xl">Tokopedia Play</h1>
                </div>
            </Link>
            <div className="flex items-center gap-x-4">
                <Link to="/login">
                    <div className="flex items-center gap-x-[4px] py-[3px] px-[10px] rounded-[8px] bg-white">
                        <h3 className="font-bold text-[14px] text-black">
                            Login
                        </h3>
                        <span className="text-[18px] text-black">
                            <VscSignIn />
                        </span>
                    </div>
                </Link>
                <Link to="/signin">
                    <div className="flex items-center gap-x-[4px] py-[3px] px-[10px] rounded-[8px] bg-[#00CC33]">
                        <h3 className="font-bold text-[14px] text-black">
                            Sign In
                        </h3>
                        <span className="text-[18px] text-black">
                            <CgLogIn />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default DesktopNavigation
