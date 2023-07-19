import dotenv from 'dotenv';
import app from './app';

dotenv.config();

// Porta que o servidor irá escutar
const port = process.env.PORT;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
