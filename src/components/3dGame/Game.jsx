import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Assistant from "../models/Assistant";
import Person2 from "../models/Person2";
import axios from 'axios';
import { aiUrl } from "../../index";

const AIbody = {
    model: "lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF/Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf",
    messages: [
        { role: "user", content: "this hello is by tarush" }
    ],
    temperature: 0.7,
    max_tokens: -1,
    stream: false
}

export default function Game() {
    const getGameBaseData = async () => {
        const requestData = {
            model: "lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF/Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf",
            messages: [{ role: "user", content: message }],
            temperature: 0.7,
            max_tokens: -1,
            stream: false,
        };

        try {
            const response = await fetch("http://192.168.22.112:1234/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();

            if (response.ok) {
                // const formattedResponse = formatResponse(
                //     data.choices[0].message.content
                // );
                console.log(data);
            } else {
                console.log('error')
            }
        } catch (error) {
            console.log('error');
        }
    }


    useEffect(() => {
        getGameBaseData();
    }, []);

    return <Canvas
        flat gl={{ antialias: false }}
        orthographic
        camera={{ zoom: 180, near: 2, far: 8 }}
    >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 0]} intensity={4} />
        {/* <Perf /> */}

        <Suspense fallback={null}>
            <Assistant />
            <Person2 />
        </Suspense>

    </Canvas>
}