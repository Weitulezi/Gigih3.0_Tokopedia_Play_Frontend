import React, { useState } from "react"
import ProductCard from "./ProductCard"
import useGetVideoProductList from "../../hooks/useGetVideoProductList"
import ProductListSkeleton from "./Skeleton"

const ProductCatalogue = ({ videoId }) => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)
    useGetVideoProductList(videoId, setProducts, setLoading)

    return (
        <div className="w-[15%] h-[90vh] overflow-scroll overflow-x-hidden">
            <div
                className="mx-[15px] my-[15px]"
                style={{
                    displasy: "flex",
                    flexDirection: "column",
                    rowGap: "14px",
                }}
            >
                {products &&
                    products.map((item) => (
                        <ProductCard
                            key={item._id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            link={item.link}
                        />
                    ))}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        rowGap: "10px",
                    }}
                ></div>
                {loading && <ProductListSkeleton />}
            </div>
        </div>
    )
}

export default ProductCatalogue
