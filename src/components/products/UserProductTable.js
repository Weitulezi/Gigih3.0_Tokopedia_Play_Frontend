import React, { useState } from "react"
import useGetUserProductList from "../../hooks/useGetUserProductList"
import TableSkeleton from "../TableSkeleton"
import UserProductTableItem from "./UserProductTableItem"

const UserProductTable = () => {
    const [userProducts, setUserProducts] = useState(null)

    const { loading } = useGetUserProductList(userProducts, setUserProducts)

    return (
        <div
            style={{ boxShadow: "4px 10px 27px 2px rgba(0,0,0,1)" }}
            className="w-[100%] border-[2px] border-black-40 rounded-md"
        >
            <div className="flex w-full">
                {userProducts && (
                    <table className="w-full table-auto">
                        <thead className="text-left">
                            <tr>
                                <th className="py-[10px] px-[10px] text-center border-r-2 border-black-40">
                                    No
                                </th>
                                <th className="w-[40%] py-[10px] text-left px-[10px] border-r-2 border-black-40">
                                    Title
                                </th>
                                <th className="w-[25%] py-[10px] text-center px-[10px] border-r-2 border-black-40">
                                    Price
                                </th>
                                <th className="lg:block md:block hidden py-[10px] text-center px-[10px] border-r-2 border-black-40">
                                    Link
                                </th>
                                <th className="w-[11%] py-[10px] text-center px-[10px] ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userProducts &&
                                userProducts.map((item, index) => (
                                    <UserProductTableItem
                                        key={item._id}
                                        index={index}
                                        _id={item._id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        link={item.link}
                                        videoId={item.video}
                                        setUserProducts={setUserProducts}
                                    />
                                ))}
                        </tbody>
                    </table>
                )}
                {loading && <TableSkeleton />}
            </div>
        </div>
    )
}

export default UserProductTable
