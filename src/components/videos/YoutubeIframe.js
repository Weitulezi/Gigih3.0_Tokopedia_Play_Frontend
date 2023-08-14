import React from "react"

const YoutubeIframe = ({ embedId, iframeWidth, iframeHeight }) => {
    return (
        <div className="flex-column items-center justify-center">
            <iframe
                className="py-[15px]"
                width={iframeWidth}
                height={iframeHeight}
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            ></iframe>
        </div>
    )
}

export default YoutubeIframe
