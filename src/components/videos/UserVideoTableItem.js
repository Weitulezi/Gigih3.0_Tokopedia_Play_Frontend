import React, { useState } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { RiDeleteBinLine } from "react-icons/ri"
import useDeleteVideo from "../../hooks/useDeleteVideo"
import EditVideoModal from "./EditVideoModal"

const UserVideoTableItem = ({
    index,
    _id,
    title,
    thumbnail,
    embedId,
    category,
    setUserVideos,
}) => {
    const { setDeleteVideo } = useDeleteVideo(_id)
    const [openModal, setOpenModal] = useState(undefined)

    return (
        <tr className="border-t-2 border-black-40">
            <td className="py-[10px]  text-center px-[10px] border-r-2 border-black-40">
                {index + 1}
            </td>
            <td className="w-[60%] py-[10px] text-left px-[10px] border-r-2 border-black-40">
                {title}
            </td>
            <td className="py-[10px] text-center px-[10px] border-r-2 border-black-40">
                {embedId}
            </td>
            <td className="flex items-center justify-center gap-x-[14px] p-[6px]">
                <button onClick={() => setOpenModal("dismissible")}>
                    <div className="bg-[#00C531] p-[6px] text-black-40 rounded-md">
                        <AiOutlineEdit />
                    </div>
                </button>
                <button onClick={(e) => setDeleteVideo(true)}>
                    <div className="bg-red-600 text-white p-[6px]  rounded-md">
                        <RiDeleteBinLine />
                    </div>
                </button>
                <EditVideoModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    _id={_id}
                    oldTitle={title}
                    oldEmbedId={embedId}
                    oldThumbnail={thumbnail}
                    oldCategory={category}
                    setUserVideos={setUserVideos}
                />
            </td>
        </tr>
    )
}

export default UserVideoTableItem
