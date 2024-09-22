import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(cors());
app.use(json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Schema & Model
// const UserSchema = new Schema({
//   name: String,
//   email: String
// });
// const User = model('User', UserSchema);

// // Routes
// app.post('/api/users', async (req, res) => {
//   const user = new User(req.body);
//   await user.save();
//   res.send(user);
// });

// app.get('/api/users', async (req, res) => {
//   const users = await User.find();
//   res.send(users);
// });

const PORT = 3200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));