import React from "react"
import UserVideoTableItem from "./UserVideoTableItem"
import TableSkeleton from "../TableSkeleton"
import useGetUserVideoList from "../../hooks/useGetUserVideoList"

const UserVideoTable = () => {
    const { loading, userVideos, setUserVideos } = useGetUserVideoList()

    return (
        <div
            style={{ boxShadow: "4px 10px 27px 2px rgba(0,0,0,1)" }}
            className="w-[100%] border-[2px] border-black-40 rounded-md"
        >
            <div className="flex w-full">
                {userVideos && (
                    <table className="w-full table-auto">
                        <thead className="text-left">
                            <tr>
                                <th className="py-[10px] px-[10px] text-center border-r-2 border-black-40">
                                    No
                                </th>
                                <th className="py-[10px] text-left px-[10px] border-r-2 border-black-40">
                                    Title
                                </th>
                                <th className="lg:block md:block hidden py-[10px] text-center px-[10px] border-r-2 border-black-40">
                                    Embed Id
                                </th>
                                <th className="py-[10px] text-center px-[10px] ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userVideos.map((item, index) => (
                                <UserVideoTableItem
                                    key={item._id}
                                    index={index}
                                    title={item.title}
                                    thumbnail={item.thumbnail}
                                    embedId={item.embedId}
                                    _id={item._id}
                                    category={item.categories[0].name}
                                    setUserVideos={setUserVideos}
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

export default UserVideoTable
