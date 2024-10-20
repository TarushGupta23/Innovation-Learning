import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import axios from "axios";
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(cors());
app.use(json());

// const mongoURI = process.env.MONGO_URI;
// connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

app.post('/3d/generate', async (req, res) => {
    console.log(req.body.content)
    const response = await axios.post(process.env.STORY_GENERATOR_URL, {
        model: "lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF/Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf",
        messages: [
            { role: "user", content: req.body.content }
        ],
        temperature: 0.7,
        max_tokens: -1,
        stream: false
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    res.send({
        story: response.data.choices[0].message.content
    })
});


const PORT = 3200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));