import express from 'express';
import router from './router'

const app = express();
const PORT = 3333;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server Online http://localhost:${PORT}`);
});