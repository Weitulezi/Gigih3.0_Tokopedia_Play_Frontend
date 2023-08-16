import React, { useState } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { RiDeleteBinLine } from "react-icons/ri"
import useDeleteProduct from "../../hooks/useDeleteProduct"
import EditProductModal from "./EditProductModal"

const UserProductTableItem = ({
    index,
    _id,
    title,
    image,
    price,
    link,
    videoId,
    setUserProducts,
}) => {
    const [openModal, setOpenModal] = useState(undefined)

    const { setDeleteProduct } = useDeleteProduct(_id, setUserProducts)

    return (
        <tr key={_id} className="border-t-2 border-black-40">
            <td className="w-[6%] py-[10px] px-[10px] text-center border-r-2 border-black-40">
                {index + 1}
            </td>
            <td className="py-[10px] px-[10px] text-left border-r-2 border-black-40">
                {title.length > 40 ? `${title.substr(0, 40)}...` : title}
            </td>
            <td className="py-[10px] px-[10px] text-center border-r-2 border-black-40">
                Rp. {price}
            </td>
            <td className="lg:flex md:flex hidden justify-center py-[10px] text-center px-[10px] border-r-2 border-black-40">
                <a href={`${link}`} target="_blank">
                    Visit
                </a>
            </td>
            <td className="w-[15%] text-center border-r-2 border-black-40">
                <div className="flex items-center justify-center gap-x-4 py-[10px] px-[10px]">
                    <button onClick={() => setOpenModal("dismissible")}>
                        <div className="bg-[#00C531] p-[6px] text-black-40 rounded-md">
                            <AiOutlineEdit />
                        </div>
                    </button>
                    <button onClick={(e) => setDeleteProduct(true)}>
                        <div className="bg-red-600 text-white p-[6px]  rounded-md">
                            <RiDeleteBinLine />
                        </div>
                    </button>
                </div>
            </td>
            <EditProductModal
                setOpenModal={setOpenModal}
                openModal={openModal}
                _id={_id}
                oldTitle={title}
                oldImage={image}
                oldPrice={price}
                oldLink={link}
                oldVideoId={videoId}
                setUserProducts={setUserProducts}
            />
        </tr>
    )
}

export default UserProductTableItem
