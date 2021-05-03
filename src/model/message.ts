import { v4 as uuidV4 } from 'uuid';

class Message {
 id: string;
 name?: string;
 message: string;
 created_at: Date;

 constructor() {
  if (this.id = uuidV4()) {
   
  };
 };
};

export { Message };