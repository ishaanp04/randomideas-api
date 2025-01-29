const express = require('express');
require('dotenv').config();
const port = process.env.port || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  response.json({ message: 'Welcome, this is the randomideas api' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
