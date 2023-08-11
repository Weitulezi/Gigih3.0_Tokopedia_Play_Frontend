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
                <div className="flex items-center gap-x-[12px]">
                    <h1>Elektronik</h1>
                    <h1>Clothes</h1>
                    <h1>F&B</h1>
                </div>
                <VideoCatalogue />
            </div>
        </div>
    )
}

export default HomePage
