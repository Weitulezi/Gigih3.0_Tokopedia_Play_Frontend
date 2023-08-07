import React from "react"
import { Link } from "react-router-dom"

const VideoCard = () => {
    return (
        <Link to="/videos/videoId">
            <div
                className="relative"
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
                <div>
                    <img
                        className="w-[500px]  object-cover"
                        src="/assets/yt-thumbnail.jpg"
                        alt=""
                    />
                </div>
                <div className="w-full absolute bottom-0 left-0 px-[8px] py-[5px] bg-black-0.6">
                    <h1 className="text-[15px] text-white font-bold">
                        Daster terbaru, murah dan kekinian
                    </h1>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard
