import express from 'express';
import { messageRoutes } from './routes/message.routes';

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());

app.use('/message', messageRoutes);

app.listen(PORT, () => {
 console.info(`App started at port ${PORT}`);
});