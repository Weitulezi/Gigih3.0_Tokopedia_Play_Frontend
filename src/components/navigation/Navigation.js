import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

const Navigation = () => {
    const location = useLocation()

    if (location.pathname !== "/login" && location.pathname !== "/signin") {
        return (
            <nav className="w-full min-h-[10vh] flex items-center text-white">
                <div className="z-10 w-full min-h-[10vh] top-0 fixed flex justify-center items-center bg-black border-b-[1px] border-black-40">
                    <DesktopNavigation />
                    <MobileNavigation />
                </div>
            </nav>
        )
    }
}

export default Navigation
