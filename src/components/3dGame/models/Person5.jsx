import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Person5() {
    const model = useGLTF('./models/person5.glb')
    const animation = useAnimations(model.animations, model.scene)
    rightPos = [3.12, -2.71, 0]
    useEffect(() => {
        const action = animation.actions["Animation"]
        action.reset().play();
    }, [])
    return <primitive object={model.scene} position={rightPos} scale={2.59} rotation-y={-0.20}/>
}

useGLTF.preload('./models/person5.glb')