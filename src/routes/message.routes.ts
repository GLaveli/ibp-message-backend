import { Router } from 'express';
import { MessageRepository } from '../repositories/MessageRepositorie';
import { CreateMessageServices } from '../services/CreateMessageServices';

const messageRoutes = Router();
const messageRepository = new MessageRepository();

messageRoutes.post('/', (req, res) => {
 const { name, message, messageType } = req.body;

 const createMessageServices = new CreateMessageServices(messageRepository);

 const response = createMessageServices.execute({ name, message, messageType });

 return res.status(201).json({ message: 'created!' });
});

messageRoutes.get('/', (req, res) => {

 const allMessages = messageRepository.list();

 return res.status(200).json(allMessages);
});

export { messageRoutes };