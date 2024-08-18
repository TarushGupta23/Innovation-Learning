import { OrbitControls, Clone, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

export default function Experience() {
    const city = useGLTF('./models/city.glb');
    const villan = useGLTF('./models/villan.glb')
    const assistant = useGLTF('./models/assistant.glb')

    
    return <Canvas 
        flat gl={{antialias: false}}
        camera={{near: 2, far: 100}}
    >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 0]} intensity={4}/>
        <mesh position={[0, 10, 5]}>
            <sphereGeometry />
            <meshBasicMaterial color={'red'}/>
        </mesh>
        <OrbitControls makeDefault/>
        <Perf />

        <Suspense fallback={null}>
            <Clone object={city.scene} scale={0.01} position={[120, 0, 80]}/>
            <Clone object={villan.scene} scale={.8} position={[-3, .22,-6]}/>
            <Clone object={assistant.scene} scale={.65} position={[-4, .22, -6]}/>
        </Suspense>

    </Canvas>
}