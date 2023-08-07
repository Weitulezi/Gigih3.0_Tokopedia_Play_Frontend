import React, { useEffect, useState } from "react"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

const Navigation = () => {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth)
    const [isMobileMode, setIsMobileMode] = useState(false)

    useEffect(() => {
        const updateBrowserWidth = () => {
            if (window.innerWidth < 400) {
                setIsMobileMode(true)
            } else {
                setIsMobileMode(false)
            }
            setBrowserWidth(window.innerWidth)
        }
        window.addEventListener("resize", updateBrowserWidth)
        return () => {
            window.removeEventListener("resize", updateBrowserWidth)
        }
    })

    return (
        <nav className="w-full min-h-[10vh] flex items-center text-white">
            <div className="w-full min-h-[10vh] top-0 fixed flex justify-center items-center bg-black">
                {!isMobileMode ? <DesktopNavigation /> : <MobileNavigation />}
            </div>
        </nav>
    )
}

export default Navigation
