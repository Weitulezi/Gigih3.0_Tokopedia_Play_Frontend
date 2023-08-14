import React, { useState } from "react"
import ProductForm from "./ProductForm"
import UserProductTable from "./UserProductTable"

const UserProductSection = () => {
    const [action, setAction] = useState("view")

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
            }}
        >
            <div className="flex gap-x-3">
                <span
                    style={{
                        backgroundColor:
                            action === "view" ? "#00CC33" : "rgb(10, 10, 10)",
                        color: action === "view" ? "rgb(40, 40, 40)" : "white",
                    }}
                    onClick={(e) => setAction("view")}
                    className="cursor-pointer font-bold border-2 border-black-40 p-[6px] px-[10px] rounded-md"
                >
                    Product
                </span>
                <span
                    style={{
                        backgroundColor:
                            action === "create" ? "#00CC33" : "rgb(10, 10, 10)",
                        color:
                            action === "create" ? "rgb(40, 40, 40)" : "white",
                    }}
                    onClick={(e) => setAction("create")}
                    className="cursor-pointer border-2 font-bold border-black-40 p-[6px] px-[10px] rounded-md "
                >
                    Create Product
                </span>
            </div>
            {action === "create" ? <ProductForm /> : <UserProductTable />}
        </div>
    )
}

export default UserProductSection
