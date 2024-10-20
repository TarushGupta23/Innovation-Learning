import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Person4() {
    const model = useGLTF('./models/person4.glb')
    const animation = useAnimations(model.animations, model.scene)
    const rightPos = [3.17, -2.43, 0]
    useEffect(() => {
        const action = animation.actions["mixamo.com"]
        action.reset().play();
    }, [])
    return <primitive object={model.scene} position={rightPos} scale={2.29}/>
}

useGLTF.preload('./models/person4.glb')