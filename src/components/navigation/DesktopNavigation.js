import React from "react"
import { CgLogIn } from "react-icons/cg"
import { VscSignIn } from "react-icons/vsc"

const DesktopNavigation = () => {
    return (
        <div className="w-[80%]  flex justify-between items-center m-auto">
            <div className="flex items-center gap-x-2">
                <img
                    width="30px"
                    height="auto"
                    src="/assets/tokopedia_logo.png"
                    alt="Tokopedia Logo"
                />
                <h1 className="font-bold text-xl">Tokopedia Play</h1>
            </div>
            <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-[4px] py-[3px] px-[10px] rounded-[8px] border-[1px] border-black-140">
                    <h3 className="font-mono font-bold text-[13px] text-white">
                        Login
                    </h3>
                    <span className="text-[18px] text-white">
                        <CgLogIn />
                    </span>
                </div>
                <div className="flex items-center gap-x-[4px] py-[3px] px-[10px] rounded-[8px] bg-white">
                    <h3 className="font-mono font-bold text-[13px] text-black">
                        Sign In
                    </h3>
                    <span className="text-[18px] text-black">
                        <VscSignIn />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DesktopNavigation
