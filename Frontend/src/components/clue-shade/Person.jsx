import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Person({person, rightAlign}) {
    const model = useGLTF(`./models/${person.modelFile}`)
    const animation = useAnimations(model.animations, model.scene)
    const leftPos = person.leftPos
    const rightPos = person.rightPos

    useEffect(() => {
        const action = animation.actions[person.animationName]
        action.timeScale = person.animationTimescale
        action.reset().play();
    }, [])

    return <primitive object={model.scene} position={rightAlign? rightPos : leftPos} scale={person.scale} rotation-y={person.rotationY} />
}

useGLTF.preload('./models/person1.glb')