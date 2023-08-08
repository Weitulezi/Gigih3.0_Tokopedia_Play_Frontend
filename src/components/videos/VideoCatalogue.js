import React from "react"
import VideoCard from "./VideoCard"

const VideoCatalogue = () => {
    return (
        <div className="grid gap-[14px] lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>
    )
}

export default VideoCatalogue
