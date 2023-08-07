import React from "react"
import { Link } from "react-router-dom"
import { GiPriceTag } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"

const ProductCard = () => {
    return (
        <div
            className="border-[2px] border-black-40"
            style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
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
            <div className="mx-[14px]">
                <h3 className="text-[18px]">Lorem ipsum dolor sit.</h3>
            </div>
            <div className="flex justify-between items-center  mx-[14px] mb-[14px]">
                <div className="flex items-center gap-x-[8px]">
                    <span>
                        <GiPriceTag />
                    </span>
                    <span>Rp. 300000</span>
                </div>
                <Link to="/">
                    <div className="flex items-center gap-x-[4px]">
                        <span>Add to</span>
                        <span className="text-[22px]">
                            <AiOutlineShoppingCart />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
