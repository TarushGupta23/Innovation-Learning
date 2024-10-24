import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import axios from "axios";
import cors from 'cors';
import dotenv from 'dotenv';
import { formatResponse } from './Util.js';


const app = express();
dotenv.config();

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
app.use(json());

// const mongoURI = process.env.MONGO_URI;
// connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

let lastReq = {}
app.post('/3d/generate', async (req, res) => {
    return res.send("hlo");

    // lastReq[req.body.key] = req.body.content;
    // setTimeout(() => delete lastReq[req.body.key], 3000)

    // const response = await axios.post(process.env.STORY_GENERATOR_URL, {
    //     model: "lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF/Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf",
    //     messages: [
    //         { role: "user", content: req.body.content }
    //     ],
    //     temperature: 0.7,
    //     max_tokens: -1,
    //     stream: false
    // }, {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    
    // const formatedResponse = formatResponse(response.data.choices[0].message.content)
    // res.send({ story: formatedResponse })
});


const PORT = 3200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));