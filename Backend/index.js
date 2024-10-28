import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import axios from "axios";
import cors from 'cors';
import dotenv from 'dotenv';
import { formatResponse } from './Util.js';

const PORT = 3200;
const app = express();
dotenv.config();

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
app.use(json());

const mongoURI = process.env.MONGO_URI;
connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const BookSchema = new Schema({
    name: String,
    content: String
}, { collection: 'IS' });
const BookModel = model('ISData', BookSchema);

const playerSchema = new Schema({
    email: String,
    saveFiles: Array,
    books: Array,
    discoveredIS: Array
}, { collection: 'Players' });
const PlayerModel = model('PlayerData', playerSchema);

app.post('/upload-standards', async (req, res) => {
    try {
        await BookModel.insertMany(standardsData);
        res.status(201).send({ message: 'Standards uploaded successfully' });
    } catch (error) {
        console.error('Error uploading standards:', error);
        res.status(500).send({ message: 'Failed to upload standards', error });
    }
});
/**
 * input: { name: string, content: string }
 * output: { message: string }
 */

app.post('/add-player', async (req, res) => {
    try {
        const { email, saveFiles, books, discoveredIS } = req.body;

        const newPlayer = new PlayerModel({
            email,
            saveFiles: saveFiles || [],
            books: books || [],
            discoveredIS: discoveredIS || []
        });

        await newPlayer.save();
        res.status(201).send({ message: 'Player uploaded successfully', player: newPlayer });
    } catch (error) {
        console.error('Error uploading player:', error);
        res.status(500).send({ message: 'Failed to upload player', error });
    }
});
/**
 * input: {email: string, saveFiles*: [], books*: [], discoveredIS*: string[]}
 * output: { message: string }
 */

app.get('/standards-list', async (req, res) => {
    try {
        const data = await BookModel.find({});
        console.log("received list of standards");
        res.send(data.map(d => (
            { id: d._id, name: d.name, content: d.content }
        )));
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.send({ message: 'Failed to retrieve data', error });
    }
});
/**
 * output: [ {id: string, name: string, content: string} ]
 */

app.get('/2d/books', async (req, res) => {
    const email = req.query.email;

    try {
        let data = await PlayerModel.findOne({ email: email });
        if (!data) {
            data = new PlayerModel({
                email,
                saveFiles: [],
                books: [], 
                discoveredIS: []
            });
            await data.save();
            return res.send([]);
        }
        res.send(data.books);
    } catch (error) {
        console.error('Error fetching or creating player data:', error);
        res.status(500).send({ message: 'Error fetching or creating player data', error });
    }
});
/**
 * input: email: query-parameters
 * output: [ {name: string, standards: string[], rarity: int, effects: int[]} ]
 */

app.post('/2d/books', async (req, res) => {
    const { email, booksData, discoveredIS } = req.body;
    try {
        if (!email || !booksData[0]) {
            return res.status(400).send({ message: "Email and book data are required." });
        }

        let player = await PlayerModel.findOne({ email });
        if (!player) {
            player = new PlayerModel({ email, saveFiles: [], books: [] });
        }

        booksData.forEach((book) => {
            player.books.push(book);
        });
        discoveredIS.forEach((is) => {
            !player.discoveredIS.includes(is) && player.discoveredIS.push(is);
        })
        
        await player.save();
        res.status(201).send({ message: 'Book uploaded successfully' });
    } catch (error) {
        console.error('Error uploading book:', error);
        res.status(500).send({ message: 'Failed to upload book', error });
    }
});
/**
 * input: {
 *      email: string, 
 *      booksData: [ {name: string, standards: string[], rarity: int, effects: int[]} ], 
 *      discoveredIS: string[]
 * }
 * output: { message: string }
 */

app.get('/2d/file/:gameId', async (req, res) => {
    const email = req.query.email;
    let data = await PlayerModel.findOne({ email: email });
    res.send(data.saveFiles[req.params.gameId]);
});

app.post('/2d/file', async (req, res) => {
    const email = req.body.email;

    try {
        let data = await PlayerModel.findOne({ email: email });
        data.saveFiles.push(req.body.file);
        await data.save();
        res.send({ message: 'success', id: data.saveFiles.length - 1 });
    } catch (error) {
        console.error('Error fetching or creating player data:', error);
        res.send({ message: 'Error fetching or creating player data', error });
    }
});

app.post('/3d/generate', async (req, res) => {
    lastReq[req.body.key] = req.body.content;
    setTimeout(() => delete lastReq[req.body.key], 3000)

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
    
    const formatedResponse = formatResponse(response.data.choices[0].message.content)
    res.send({ story: formatedResponse })
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));