import React from "react"
import ProductCard from "./ProductCard"

const ProductCatalogue = () => {
    return (
        <div className="w-[20%] h-[90vh] overflow-scroll overflow-x-hidden">
            <div
                className="mx-[15px] my-[15px]"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "14px",
                }}
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductCatalogue
