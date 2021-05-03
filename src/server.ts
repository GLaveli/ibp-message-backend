import express from 'express';
import { documentationAPI } from './routes/documentationAPI';
import { messageRoutes } from './routes/message.routes';

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());

app.use('/message', messageRoutes);
app.use('/', documentationAPI);

app.listen(PORT, () => {
 console.info(`Server started at port: ${PORT}`);
});