import React from "react"
import { GiPriceTag } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"

const ProductCard = ({ title, image, link, price }) => {
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
                    src={`${image}`}
                    // src="/assets/bracket-tv.png"
                    alt="Product's Image example"
                />
            </div>
            <div className="mx-[14px]">
                <h3 className="text-[18px]">{title}</h3>
            </div>
            <div className="flex justify-between items-center  mx-[14px] mb-[14px]">
                <div className="flex items-center gap-x-[8px]">
                    <span>
                        <GiPriceTag />
                    </span>
                    <span>Rp. {price}</span>
                </div>
                <a href={`${link}`} target="_blank">
                    <div className="flex items-center gap-x-[4px]">
                        <span>Buy</span>
                        <span className="text-[22px]">
                            <AiOutlineShoppingCart />
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProductCard
