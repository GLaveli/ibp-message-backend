import { Message } from '../model/message';

interface IMessageCategoryDTO {
 name: string;
 message: string;
}

class MessageRepository {

 private messages: Message[];

 constructor() {
  this.messages = [];
 };

 create({ name, message }: IMessageCategoryDTO) {
  const newMessage = new Message;

  Object.assign(newMessage, {
   name,
   message,
   created_at: new Date(),
  });

  this.messages.push(newMessage);

 };

 list(): Message[] {
  return this.messages;
 };
};

export { MessageRepository };