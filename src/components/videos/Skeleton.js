import React from "react"

const Skeleton = ({ iframeWidth, iframeHeight }) => {
    return (
        <div
            className={`w-[${String(
                Math.ceil(iframeWidth).toFixed(0),
            )}px] flex border border-black-40 shadow rounded-md p-4 mx-auto`}
        >
            <div className="w-full animate-pulse flex space-x-4">
                <div className="w-[100%] h-min-[40vh] bg-black-40"></div>
                <div className="w-[100%] h-min-[40vh] bg-black-40"></div>
            </div>
        </div>
    )
}

export default Skeleton
