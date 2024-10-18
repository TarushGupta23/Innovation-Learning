import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";

const Testing = forwardRef(({ min = 0, max = 100 , units = "", direction = "horizontal", accuracy = 1 }, ref) => {
    const [spanCount, setSpanCount] = useState(0);
    const [spanPosition, setSpanPosition] = useState(0); // To track the sliding position of the span in percentage
    const containerRef = useRef(null);
    const redDivRef = useRef(null);

    // Expose the spanPosition to the parent component
    useImperativeHandle(ref, () => ({
        getSpanPosition: () => {
            console.log('spanPosition: ', spanPosition);
            return spanPosition;
        },
    }));

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth - 32;
                const spanWidth = 2;
                const gap = 8;

                const numberOfSpans = Math.floor((containerWidth + gap) / (spanWidth + gap));
                setSpanCount(numberOfSpans);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handle dragging of the span
    const handleMouseDown = (e) => {
        const startX = e.clientX;
        const startSpanPosition = spanPosition;

        const handleMouseMove = (e) => {
            if (redDivRef.current) {
                const redDivWidth = redDivRef.current.offsetWidth;
                const newSpanPositionPx = Math.min(
                    Math.max(startSpanPosition + (e.clientX - startX), 0), // Prevent moving out of left boundary
                    redDivWidth
                );
                const newSpanPositionPercent = (newSpanPositionPx / redDivWidth) * 100; // Convert to percentage
                setSpanPosition(newSpanPositionPercent);
            }
        };

        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleDivClick = (e) => {
        if (redDivRef.current) {
            const redDivLeft = redDivRef.current.getBoundingClientRect().left;
            const redDivWidth = redDivRef.current.offsetWidth;
            const clickPosition = e.clientX - redDivLeft;
    
            // Ensure the span stays within the red div
            const newSpanPositionPx = Math.min(Math.max(clickPosition, 0), redDivWidth);
            const newSpanPositionPercent = (newSpanPositionPx / redDivWidth) * 100; // Convert to percentage
            setSpanPosition(newSpanPositionPercent);
        }
    };

    return (
        <div 
            ref={containerRef}
            className="bg-white relative w-full h-full rounded-2xl border-gray-300 border-solid border shadow-md" 
        >
            <div className="absolute w-full h-full top-0 left-0 items-center justify-between flex p-4">
                {Array.from({ length: spanCount }, (_, index) => (
                    <span
                        key={index}
                        className="h-full border border-solid border-gray-300"
                    ></span>
                ))}
            </div>

            <div 
                ref={redDivRef}
                className="relative h-[calc(100%-32px)] m-4"
                onClick={handleDivClick}
            >
                <span
                    className="absolute h-full border border-solid border-gray-900 top-0 scale-110 cursor-pointer transition-all duration-100 ease-in"
                    style={{ left: `${spanPosition}%` }} // Use percentage for left position
                    onMouseDown={handleMouseDown} // Mouse down event to initiate drag
                >
                    <p className="absolute top-0 left-0 -translate-x-1/2 scale-75 -translate-y-full bg-black text-white font-semibold px-2 rounded-lg text-sm">
                        {(min + (max - min) * spanPosition / 100).toFixed(accuracy)}{units}
                    </p>
                </span>
            </div>
        </div>
    );
});

export default Testing;