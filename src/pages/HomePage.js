import React from "react"
import VideoCatalogue from "../components/videos/VideoCatalogue"

const HomePage = () => {
    return (
        <div className="min-h-[90vh] flex p-[14px] text-white">
            <div
                className="text-white"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <VideoCatalogue />
            </div>
        </div>
    )
}

export default HomePage
