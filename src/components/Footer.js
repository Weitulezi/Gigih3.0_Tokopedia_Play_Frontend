import React from "react"
import { useLocation } from "react-router-dom"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    const location = useLocation()

    if (location.pathname === "/") {
        return (
            <footer className="flex justify-between text-white border-t-[2px] border-t-black-40">
                <div className="w-[85%] flex justify-between py-[20px] m-[auto]">
                    <div className="flex-column">
                        <h1 className="text-lg font-bold">Tokopedia Play</h1>
                        <h4 className="text-[12px]">
                            By : Goto Impact Foundation
                        </h4>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <a href="https://github.com/weitulezi" target="_blank">
                            <span className="text-2xl">
                                <AiFillGithub />
                            </span>
                        </a>
                        <a
                            href="                https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3Bx4O9EivITaSMRXayuknMwA%3D%3D"
                            target="_blank"
                        >
                            <span className="text-2xl">
                                <FaLinkedinIn />
                            </span>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
