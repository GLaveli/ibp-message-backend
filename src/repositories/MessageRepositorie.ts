import { Message } from '../model/message';

interface IMessageCategoryDTO {
 name: string;
 message: string;
 messageType: number;
}

class MessageRepository {

 private messages: Message[];

 constructor() {
  this.messages = [];
 };

 create({ name, message, messageType }: IMessageCategoryDTO) {
  const newMessage = new Message;

  Object.assign(newMessage, {
   name,
   message,
   messageType,
   created_at: new Date(),
  });

  this.messages.push(newMessage);

 };

 list(): Message[] {
  return this.messages;
 };
};

export { MessageRepository };