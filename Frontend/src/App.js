import React, { useRef } from "react";
import Testing from "./pages/testing";

const App = () => {
    const testingRef = useRef();

    const getPosition = () => {
        if (testingRef.current) {
            // using react.useRef to get value of slider
            const position = testingRef.current.getSpanPosition(); 
            alert("Current Span Position: " + position);
        }
    };

    return (
        <div className="bg-red-50 w-96 h-40 p-10"> 
{/* my component will fit according to user's container size */}
            <Testing ref={testingRef} min={20} max={30} units="cm" accuracy={0} /> 
{/* this is my component with optional props: min, max, units, direction, accuracy */}
            <button onClick={getPosition} className="bg-blue-400 rounded my-4 p-1">Get Span Position</button> 
{/* sample botton to get value */}
        </div>
    );
};

export default App;