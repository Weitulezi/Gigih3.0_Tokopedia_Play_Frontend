import React from "react"

const Skeleton = ({ iframeWidth, iframeHeight }) => {
    return (
        <div
            className={`w-[100%] flex-colum border-black-40 shadow rounded-md p-4 mx-auto`}
        >
            <div className="w-full animate-pulse flex space-x-4">
                <div className="w-[100%]  bg-black-20 lg:min-h-[80vh] md:min-h-[80vh] min-h-[20vh]"></div>
            </div>
        </div>
    )
}

export default Skeleton
