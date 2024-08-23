import { Clone, useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

export default function Assistant() {
    const assistant = useGLTF('./models/assistant.glb')
    const animation = useAnimations(assistant.animations, assistant.scene)
    useEffect(() => {
        const actionFwd = animation.actions['Female_Talk']
        // const actionBwd = animation.actions['Bwd']
        // const timeScale = 2.5

        actionFwd.reset().play();
        // if (initPos.current < eventLoc && actionFwd) {
        //     actionFwd.timeScale = timeScale
        // } else if (initPos.current > eventLoc && actionBwd) {
        //     actionBwd.timeScale = timeScale
        //     actionBwd.setLoop(LoopOnce, 1).reset().play();
        // }
        // initPos.current = eventLoc;
        console.log(animation.actions)
    }, [])

    // const {x, y, z, s} = useControls('hloo', {
    //     x: {value: 0, min: -10, max: 10, step: 0.01},
    //     y: {value: 0, min: -10, max: 10, step: 0.01},
    //     z: {value: 0, min: -10, max: 10, step: 0.01},
    //     s: {value: 1, min: 1, max: 5, step: 0.01}, 
    // })
    return <primitive object={assistant.scene} position={[-3.12, -2.34, 0]} scale={1.27} />
}

useGLTF.preload('./models/assistant.glb')