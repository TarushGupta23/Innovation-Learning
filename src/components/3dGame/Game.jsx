import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Assistant from "../models/Assistant";

export default function Game() {
    return <Canvas 
        flat gl={{antialias: false}}
        orthographic
        camera={{ zoom: 180, near: 0.1, far: 1000 }}
    >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 0]} intensity={4}/>

        {/* <OrbitControls makeDefault/> */}
        {/* <Perf /> */}

        <Suspense fallback={null}>
            <Assistant />
        </Suspense>

    </Canvas>
}