import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

export default function Testing() {
    const model = useGLTF('./models/person6.glb')
    const animation = useAnimations(model.animations, model.scene)
    useEffect(() => {
        console.log(animation.actions)
        // const action = animation.actions["Animation"]
        // action.reset().play();
        // const timeScale = 2
        // action.timeScale = timeScale
    }, [])

    const {x, y, z, s, a} = useControls('hloo', {
        x: {value: 0, min: -10, max: 10, step: 0.01},
        y: {value: 0, min: -10, max: 10, step: 0.01},
        z: {value: 0, min: -10, max: 10, step: 0.01},
        s: {value: 1, min: 0, max: 5, step: 0.01}, 
        a: {value: 0, min: -2*Math.PI, max: 2*Math.PI, step: 0.01}
    })
    return <primitive object={model.scene} position={[x, y, z]} scale={s} rotation-y={a}/>
}

useGLTF.preload('./models/person6.glb')