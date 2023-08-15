import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import UserProductSection from "../components/products/UserProductSection"
import ProfileForm from "../components/ProfileForm"
import UserVideoSection from "../components/videos/UserVideoSection"
import { UserVideosContext } from "../contexts/videoContext"

const UserDashboardPage = () => {
    const location = useLocation()
    const [userVideos, setUserVideos] = useState(null)

    return (
        <UserVideosContext.Provider value={{ userVideos, setUserVideos }}>
            <div className="flex w-full text-white justify-center">
                <div
                    className="lg:w-[70%] md:w-[70%] w-[90%] h my-[30px] lg:flex md:flex flex-col"
                    style={{
                        display: "flex",
                        columnGap: "15px",
                    }}
                >
                    <section
                        style={{ boxShadow: "4px 10px 27px 2px rgba(0,0,0,1)" }}
                        className="w-[24%] h-max flex-column border-[2px] border-black-40 rounded-md overflow-hidden"
                    >
                        <div className="flex">
                            <img
                                width="100%"
                                height="auto"
                                src={`/assets/default-pp.jpg`}
                                alt=""
                            />
                        </div>
                        <Link to="/dashboard">
                            <div className="flex p-[10px] px-[14px] border-b-2 border-black-40">
                                <h1>Videos</h1>
                            </div>
                        </Link>
                        <Link to="/dashboard/products">
                            <div className="flex p-[10px] px-[14px] border-b-2 border-black-40">
                                <h1>Products</h1>
                            </div>
                        </Link>
                        <Link to="/dashboard/profile">
                            <div className="flex p-[10px] px-[14px] border-b-2 border-black-40">
                                <h1>Profile</h1>
                            </div>
                        </Link>
                    </section>
                    <section className="lg:w-[76%] md:w-[76%] w-[100%] h-max flex ">
                        {location.pathname === "/dashboard/profile" && (
                            <ProfileForm />
                        )}
                        {location.pathname === "/dashboard" && (
                            <UserVideoSection />
                        )}
                        {location.pathname === "/dashboard/products" && (
                            <UserProductSection />
                        )}
                    </section>
                </div>
            </div>
        </UserVideosContext.Provider>
    )
}

export default UserDashboardPage
