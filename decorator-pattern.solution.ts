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

// ====================================

abstract class MessageServiceDecorator extends MessageService {
  protected messageService: MessageService;

  constructor(messageService: MessageService) {
    super();

    this.messageService = messageService;
  }
}

class SMSMessageService extends MessageServiceDecorator {
  send(message: string): void {
    this.messageService.send(message);
    console.log(`Sending SMS message: ${message}`);
  }
}

class LogMessageService extends MessageServiceDecorator {
  send(message: string): void {
    this.messageService.send(message);
    console.log(`Adding logging message: ${message}`);
  }
}

// ====================================

let messageService = new EmailMessageService();
messageService = new SMSMessageService(messageService);
messageService = new LogMessageService(messageService);
const user = new User(messageService);
user.create("John");
