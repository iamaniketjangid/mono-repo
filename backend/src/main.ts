import express from 'express';
import cors from 'cors';
import { HELLO_MESSAGE } from '@org/shared';

const app = express();
const PORT = 3333;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: HELLO_MESSAGE });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});

