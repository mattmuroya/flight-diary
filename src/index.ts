import express from 'express';
import diaryRouter from './routes/diaries';
const app = express();

app.use(express.json()); // parses incoming req body data

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('ping pong!');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter); 

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});