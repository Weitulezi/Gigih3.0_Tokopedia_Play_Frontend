import { useEffect } from "react"

const useResponsiveVideoIframe = (
    iframeWidth,
    setIframeWidth,
    setIframeHeight,
) => {
    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth * 0.6
            const newHeight = newWidth / 1.7
            setIframeWidth(newWidth)
            setIframeHeight(newHeight)
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })
}

export default useResponsiveVideoIframe
