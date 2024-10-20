import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Person2() {
    const model = useGLTF('./models/person2.glb')
    const animation = useAnimations(model.animations, model.scene)
    const rightPos = [3.17, -2.43, 0]
    // useEffect(() => {
    //     const action = animation.actions['mixamo.com']
    //     action.reset().play();
    // }, [])
    return <primitive object={model.scene} position={rightPos} scale={0.24}/>
}

useGLTF.preload('./models/person2.glb')