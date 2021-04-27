import { MessageRepository } from '../repositories/MessageRepositorie';

interface IRequest {
 name: string;
 message: string;
 messageType: number;
};

class CreateMessageServices {
 constructor(private messageRepository: MessageRepository) { }

 execute({ name, message, messageType }: IRequest): void {
  this.messageRepository.create({ name, message, messageType });
 };

};

export { CreateMessageServices };