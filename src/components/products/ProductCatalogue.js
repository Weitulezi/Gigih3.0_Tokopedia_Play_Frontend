import React from "react"
import ProductCard from "./ProductCard"

const ProductCatalogue = ({ products }) => {
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
                {products &&
                    products.map((item) => (
                        <ProductCard
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            link={item.link}
                        />
                    ))}
            </div>
        </div>
    )
}

export default ProductCatalogue
