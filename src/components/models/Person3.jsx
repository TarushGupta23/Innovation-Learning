import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Person3() {
    const model = useGLTF('./models/person3.glb')
    const animation = useAnimations(model.animations, model.scene)
    rightPos = [3.17, -2.43, 0]
    useEffect(() => {
        const action = animation.actions["Armature|beszed"]
        action.reset().play();
    }, [])
    return <primitive object={model.scene} position={rightPos} scale={2.44}/>
}

useGLTF.preload('./models/person3.glb')