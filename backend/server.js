const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://shifananazrin15:musicplayer@cluster0.fzy7kaw.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  isLiked: Boolean,
  url: String,
});

const Song = mongoose.model('Song', songSchema);

app.get('/api/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/songs', async (req, res) => {
  const { title, artist, isLiked, url } = req.body;

  try {
    const newSong = new Song({ title, artist, isLiked, url });
    await newSong.save();

    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/songs/like/:id', async (req, res) => {
  const songId = req.params.id;

  try {
    const song = await Song.findById(songId);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    song.isLiked = !song.isLiked;
    await song.save();

    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});