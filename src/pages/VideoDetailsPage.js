import React, { useState } from "react"
import ProductCatalogue from "../components/products/ProductCatalogue"
import useResponsiveVideoIframe from "../hooks/useResponsiveVideoIframe"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import useGetVideoDetail from "../hooks/useGetVideoDetail"
import useGetVideoProductList from "../hooks/useGetVideoProductList"
import CommentSection from "../components/comments/CommentSection"
import YoutubeIframe from "../components/videos/YoutubeIframe"

const VideoDetailsPage = () => {
    const { videoId } = useParams()

    const [video, setVideo] = useState(null)
    const [products, setProducts] = useState(null)
    const [iframeWidth, setIframeWidth] = useState(window.innerWidth * 0.6)
    const [iframeHeight, setIframeHeight] = useState(
        (window.innerWidth * 0.6) / 1.7,
    )

    useResponsiveVideoIframe(iframeWidth, setIframeWidth, setIframeHeight)
    useGetVideoDetail(videoId, setVideo)
    useGetVideoProductList(videoId, setProducts)

    return (
        <div className="flex text-white">
            <div
                className="w-full flex justify-between"
                style={{ gap: "15px" }}
            >
                <ProductCatalogue products={products} />
                {video && (
                    <YoutubeIframe
                        embedId={video.embedId}
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
