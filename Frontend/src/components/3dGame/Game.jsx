import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Assistant from "./models/Assistant";
import Person1 from "./models/Person5";

export default function Game() {

    return <Canvas
        flat gl={{ antialias: false }}
        orthographic
        camera={{ zoom: 180, near: 2, far: 8 }}
    >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 0]} intensity={4} />

        <Suspense fallback={null}>
            <Assistant />
            <Person1 />
        </Suspense>

    </Canvas>
}