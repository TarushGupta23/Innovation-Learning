import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Assistant() {
    const model = useGLTF('./models/person1.glb')
    const animation = useAnimations(model.animations, model.scene)
    const leftPos = [-3.2, -2.58, 0]
    useEffect(() => {
        const action = animation.actions['Animation']
        const timeScale = 2

        action.timeScale = timeScale
        action.reset().play();
    }, [])

    return <primitive object={model.scene} position={leftPos} scale={2.60} rotation-y={-0.55}/>
}

useGLTF.preload('./models/person1.glb')