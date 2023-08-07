import React, { useEffect, useState } from "react"
import ProductCatalogue from "../components/products/ProductCatalogue"

const VideoDetailsPage = () => {
    const [iframeWidth, setIframeWidth] = useState(window.innerWidth * 0.6)
    const [iframeHeight, setIframeHeight] = useState(
        (window.innerWidth * 0.6) / 1.7,
    )

    useEffect(() => {
        console.log(iframeWidth)
        const handleResize = () => {
            const newWidth = window.innerWidth * 0.6
            const newHeight = newWidth / 1.7
            setIframeWidth(newWidth)
            setIframeHeight(newHeight)
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

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
