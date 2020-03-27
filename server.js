const express = require('express');
const connectDB = require('./config/db');
const artists = require('./routes/artists');
const songs = require('./routes/songs');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

// app.use('/artists', artists);
// app.use('/songs', songs);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
