import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CgLogIn } from "react-icons/cg"
import { VscSignIn } from "react-icons/vsc"
import { AiOutlineUser } from "react-icons/ai"
import { AuthContext } from "../../contexts/userContext"
import { useHistory } from "react-router-dom"
import { logoutUser } from "../../utils/auth"
import { Dropdown, Item } from "flowbite-react"
import { Navbar } from "flowbite-react"

const MobileNavigation = () => {
    const { authData, setAuthData } = useContext(AuthContext)
    const history = useHistory()

    return (
        <div className="lg:hidden md:hidden flex w-[85%] justify-between items-center m-auto">
            <Link to="/">
                <div className="flex items-center gap-x-2">
                    <img
                        width="18px"
                        height="auto"
                        src="/assets/tokopedia_logo.png"
                        alt="Tokopedia Logo"
                    />
                    <h1 className="font-bold font-space-grotesk text-[14px]">
                        Tokopedia Play
                    </h1>
                </div>
            </Link>
            {!authData ? (
                <div className="flex items-center gap-x-4">
                    <Link to="/login">
                        <div className="flex items-center gap-x-[4px] py-[3px] px-[10px] rounded-[8px] bg-[#00CC33]">
                            <h3 className="font-bold text-[14px] text-black">
                                Login
                            </h3>
                            <span className="text-[18px] text-black">
                                <VscSignIn />
                            </span>
                        </div>
                    </Link>
                </div>
            ) : (
                <div className="flex items-center gap-x-2 ">
                    <Link to="/dashboard">
                        <div className="flex items-center gap-x-[4px] py-[3px] px-[10px] rounded-[8px] bg-white">
                            <span className="text-[14px] text-black">
                                <AiOutlineUser />
                            </span>
                        </div>
                    </Link>
                    <div
                        onClick={(e) => logoutUser(setAuthData, history)}
                        className="flex items-center gap-x-[4px] py-[3px] px-[10px] rounded-[8px] bg-[#00CC33] cursor-pointer"
                    >
                        <h3 className="font-bold text-[12px] text-black">
                            Logout
                        </h3>
                        <span className="text-[14px] text-black">
                            <CgLogIn />
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileNavigation
