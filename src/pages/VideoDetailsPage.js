import React, { useState } from "react"
import ProductCatalogue from "../components/products/ProductCatalogue"
import useResponsiveVideoIframe from "../hooks/useResponsiveVideoIframe"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import useGetVideoDetail from "../hooks/useGetVideoDetail"
import useGetVideoProductList from "../hooks/useGetVideoProductList"
import CommentSection from "../components/comments/CommentSection"
import YoutubeIframe from "../components/videos/YoutubeIframe"
import YoutubeIframSkeleton from "../components/videos/Skeleton"

const VideoDetailsPage = () => {
    const { videoId } = useParams()

    const [video, setVideo] = useState(null)
    const [iframeWidth, setIframeWidth] = useState(window.innerWidth * 0.65)
    const [iframeHeight, setIframeHeight] = useState(
        (window.innerWidth * 0.65) / 1.7,
    )
    const [loading, setLoading] = useState(false)

    useResponsiveVideoIframe(iframeWidth, setIframeWidth, setIframeHeight)
    useGetVideoDetail(videoId, setVideo, setLoading)

    return (
        <div className="flex text-white">
            <div
                className="w-full lg:flex md:flex flex-column justify-between"
                style={{ gap: "15px" }}
            >
                <ProductCatalogue videoId={videoId} />
                {video && (
                    <YoutubeIframe
                        embedId={video.embedId}
                        iframeWidth={iframeWidth}
                        iframeHeight={iframeHeight}
                    />
                )}
                {loading && (
                    <YoutubeIframSkeleton
                        iframeWidth={iframeWidth}
                        iframeHeight={iframeHeight}
                    />
                )}
                <CommentSection videoId={videoId} />
            </div>
        </div>
    )
}

export default VideoDetailsPage
