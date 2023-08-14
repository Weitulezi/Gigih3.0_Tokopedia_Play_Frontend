import React from "react"

const ProductListSkeleton = () => {
    return (
        <>
            {"1234567".split("").map((item) => (
                <div className="border border-black-40 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-black-40 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-black-40 rounded"></div>
                            <div cslass="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-black-40 rounded col-span-2"></div>
                                    <div className="h-2 bg-black-40 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-black-40 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductListSkeleton
