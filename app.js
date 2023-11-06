import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import indexRouter  from './routes/index.js';
import deliveryRouter from './routes/delivery.js';

dotenv.config();
const app = express();

// const CONNECTION_URL = mongoURI;


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json())
app.use(cors());


app.use('/', indexRouter);
app.use('/delivery', deliveryRouter);

const PORT = process.env.PORT || 5000;


// app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);