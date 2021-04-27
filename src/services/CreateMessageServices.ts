import { MessageRepository } from '../repositories/MessageRepositorie';

interface IRequest {
 name: string;
 message: string;
};

class CreateMessageServices {
 constructor(private messageRepository: MessageRepository) { }

 execute({ name, message }) {
  this.messageRepository.create({ name, message });
 };

};

export { CreateMessageServices };