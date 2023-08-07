import React from "react"

const ProductCard = () => {
    return (
        <div
            className="border-[2px] border-black-40"
            style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "6px",
            }}
        >
            <div className="flex justify-center">
                <img
                    width="100%"
                    height="auto"
                    className="object-cover"
                    src="/assets/yt-thumbnail.jpg"
                    alt=""
                />
            </div>
            <div className="mx-[10px]">
                <h3 className="text-[18px]">Product Name</h3>
            </div>
            <div className="mx-[10px] mb-[6px]">
                <h5 className="text-[14px]">Rp. 230000</h5>
            </div>
        </div>
    )
}

export default ProductCard
