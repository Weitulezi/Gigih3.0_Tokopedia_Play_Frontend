import React from "react"

const YoutubeIframe = ({ embedId, iframeWidth, iframeHeight }) => {
    return (
        <div className="flex-column items-center justify-center">
            {/* <h1 className="text-[35px] text-center mt-[10px] font-bold font-space-grotesk">
                {title}
            </h1> */}
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
