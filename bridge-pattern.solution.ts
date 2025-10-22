/** --- Implementation: Notification Channels --- */
interface NotificationChannel {
  send(message: string): void;
}

class EmailChannel implements NotificationChannel {
  send(message: string) {
    console.log(`Email: ${message}`);
  }
}

class SMSChannel implements NotificationChannel {
  send(message: string) {
    console.log(`SMS: ${message}`);
  }
}

/** --- Abstraction: Messages --- */
abstract class Message {
  constructor(protected channel: NotificationChannel) {}
  abstract sendMessage(content: string): void;
}

class AlertMessage extends Message {
  sendMessage(content: string) {
    this.channel.send(`[ALERT] ${content}`);
  }
}

class ReminderMessage extends Message {
  sendMessage(content: string) {
    this.channel.send(`[REMINDER] ${content}`);
  }
}

/** --- Usage --- */
const emailChannel = new EmailChannel();
const smsChannel = new SMSChannel();

const alertViaEmail = new AlertMessage(emailChannel);
alertViaEmail.sendMessage("Server down!");

const reminderViaSMS = new ReminderMessage(smsChannel);
reminderViaSMS.sendMessage("Meeting at 3 PM");

/*
Only 2 message types + 2 channels = 4 classes (vs. 6 before).
Add new channels without changing message classes.
Add new message types without changing channel classes.
Mix & match dynamically.
*/
