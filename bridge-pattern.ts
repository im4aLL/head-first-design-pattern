/** --- Email Notifications --- */
class EmailAlertNotification {
  send(message: string) {
    console.log(`Email Alert: ${message}`);
  }
}

class EmailReminderNotification {
  send(message: string) {
    console.log(`Email Reminder: ${message}`);
  }
}

/** --- SMS Notifications --- */
class SMSAlertNotification {
  send(message: string) {
    console.log(`SMS Alert: ${message}`);
  }
}

class SMSReminderNotification {
  send(message: string) {
    console.log(`SMS Reminder: ${message}`);
  }
}

/** --- Push Notifications --- */
class PushAlertNotification {
  send(message: string) {
    console.log(`Push Alert: ${message}`);
  }
}

class PushReminderNotification {
  send(message: string) {
    console.log(`Push Reminder: ${message}`);
  }
}

/** --- Usage --- */
const emailAlert = new EmailAlertNotification();
emailAlert.send("Server down!"); // Email Alert

const smsReminder = new SMSReminderNotification();
smsReminder.send("Meeting at 3 PM"); // SMS Reminder

/*
Problems in this approach

Class Explosion:
For 3 channels × 2 message types -> 6 classes.
If you add 5 channels × 3 message types -> 15 classes!

Hard to maintain:
Adding a new channel (e.g., Slack) requires creating multiple new classes.
Adding a new message type (e.g., Promotion) also requires new classes for each channel.

Poor scalability:
Every combination is hard-coded into a separate class.
*/
