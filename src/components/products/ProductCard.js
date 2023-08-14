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
            <div className="flex justify-center relative">
                <img
                    width="100%"
                    height="auto"
                    className="object-cover"
                    src={`${image}`}
                    // src="/assets/bracket-tv.png"
                    alt="Product's Image example"
                />
                <div className="w-full absolute bottom-0 left-0 bg-black-0.6">
                    <h3 className="text-[16px] m-[6px] text-white font-bold">
                        {title}
                    </h3>
                </div>
            </div>
            <div className="flex-column mx-[14px] mb-[14px]">
                <div className="flex items-center gap-x-[8px] mb-[8px]">
                    <span>
                        <GiPriceTag />
                    </span>
                    <span className="text-[14px]">Rp. {price}</span>
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
