import React from "react"
import { Link } from "react-router-dom"

const VideoCard = ({ videoId, title, thumbnail }) => {
    return (
        <Link to={`/videos/${videoId}`}>
            <div
                className="relative"
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
                <div>
                    <img
                        className="w-[500px]  object-cover"
                        src={`${thumbnail}`}
                        alt={title}
                        loading="lazy"
                    />
                </div>
                <div className="w-full absolute bottom-0 left-0 px-[8px] py-[5px] bg-black-0.6">
                    <h1 className="text-[15px] text-white font-bold">
                        {title}
                    </h1>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard
