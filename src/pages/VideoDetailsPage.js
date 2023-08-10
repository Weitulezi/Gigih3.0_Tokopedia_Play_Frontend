import React, { useState } from "react"
import ProductCatalogue from "../components/products/ProductCatalogue"
import useResponsiveVideoIframe from "../hooks/useResponsiveVideoIframe"

const VideoDetailsPage = () => {
    const [iframeWidth, setIframeWidth] = useState(window.innerWidth * 0.6)
    const [iframeHeight, setIframeHeight] = useState(
        (window.innerWidth * 0.6) / 1.7,
    )

    useResponsiveVideoIframe(iframeWidth, setIframeWidth, setIframeHeight)

    return (
        <div className="flex  text-white">
            <div
                className="w-full flex justify-between"
                style={{ gap: "15px" }}
            >
                <ProductCatalogue />
                <iframe
                    className="py-[15px]"
                    width={iframeWidth}
                    height={iframeHeight}
                    src={`https://www.youtube.com/embed/0kG44Z5OCMU`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                ></iframe>
                <div className="w-[20%]">Comment List</div>
            </div>
        </div>
    )
}

export default VideoDetailsPage
