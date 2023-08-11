import React, { useContext } from "react"
import VideoCard from "./VideoCard"
import useGetVideoList from "../../hooks/useGetVideoList"
import { VideoContext } from "../../contexts/videoContext"

const VideoCatalogue = () => {
    const { videosData, setVideosData } = useContext(VideoContext)
    useGetVideoList(videosData, setVideosData)

    return (
        <div className="grid gap-[14px] lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
            {videosData &&
                videosData.length > 0 &&
                videosData.map((video) => (
                    <VideoCard
                        key={video._id}
                        videoId={video._id}
                        title={video.title}
                        thumbnail={video.thumbnail}
                        embedId={video.embedId}
                    />
                ))}
        </div>
    )
}

export default VideoCatalogue
