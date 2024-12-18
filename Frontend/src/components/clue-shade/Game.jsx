import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Person from "./Person";
import { assistant, person1 } from "../../data/clue-shade-data";

export default function Game() {

    return <Canvas
        flat gl={{ antialias: false }}
        orthographic
        camera={{ zoom: 180, near: 2, far: 8 }}
    >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 0]} intensity={4} />

        <Suspense fallback={null}>
            <Person person={assistant} />
            <Person person={person1} rightAlign />
        </Suspense>

    </Canvas>
}