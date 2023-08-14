import React from "react"

const TableSkeleton = () => {
    return (
        <table className="w-full table-auto animate-pulse">
            <thead className="text-left">
                <tr>
                    <th className="w-[5%]  py-[20px] px-[10px] text-center border-r-2 border-black-20"></th>
                    <th className="w-[60%]  py-[20px]  text-left px-[10px] border-r-2 border-black-20"></th>
                    <th className=" py-[20px]  text-center px-[10px] border-r-2 border-black-20"></th>
                    <th className=" py-[20px]  text-center px-[10px] "></th>
                </tr>
            </thead>
            <tbody>
                {"12345678".split("").map((item) => (
                    <tr key={item} className="border-t-2 border-black-20">
                        <td className=" py-[20px]  px-[10px] text-center border-r-2 border-black-20"></td>
                        <td className=" py-[20px]  px-[10px] text-center border-r-2 border-black-20"></td>
                        <td className=" py-[20px]  px-[10px] text-center border-r-2 border-black-20"></td>
                        <td className=" py-[20px]  px-[10px] text-center border-r-2 border-black-20"></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableSkeleton
