import express from 'express';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('ping pong!');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${3000}`);
});