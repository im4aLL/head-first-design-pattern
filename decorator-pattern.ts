abstract class MessageService {
  abstract send(message: string): void;
}

class EmailMessageService extends MessageService {
  send(message: string): void {
    console.log(`Sending email message: ${message}`);
  }
}

class User {
  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  create(name: string) {
    this.messageService.send(name);
  }
}

const messageService = new EmailMessageService();
const user = new User(messageService);
user.create("John");

/*
Problem

You have a base message system (MessageService) that can send messages. Later, you want to add features dynamically like:

Logging the message
Sending via SMS or Slack in addition to Email
Encrypting the message

You don't want to modify the base message class every time.
*/
