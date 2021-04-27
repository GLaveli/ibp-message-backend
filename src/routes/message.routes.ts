import { Router } from 'express';

const messageRoutes = Router();

messageRoutes.post('/', (req, res) => {
 const { name, message } = req.body;

 res.send({ 'name': name, 'message': message });
});

messageRoutes.get('/', (req, res) => {
 res.send('Mensagens!');
});

export { messageRoutes };