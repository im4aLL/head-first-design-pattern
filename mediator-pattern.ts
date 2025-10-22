/*
Problem

Imagine we're building a simple event-driven app with these modules:
Logger - logs messages
Analytics - tracks user actions
NotificationService - sends notifications
Normally, each module might call others directly like this:
*/

class Logger {
  log(message: string) {
    console.log("LOG:", message);
    // directly call others
    analytics.track("log_event");
    notification.send("Log added");
  }
}

class Analytics {
  track(event: string) {
    console.log("Tracking:", event);
  }
}

class NotificationService {
  send(msg: string) {
    console.log("Notification:", msg);
  }
}

const analytics = new Analytics();
const notification = new NotificationService();
const logger = new Logger();

// Using
logger.log("User clicked button");

/*
Logger knows about both Analytics and NotificationService.
Hard to add new services later - every class must be updated.
Everything is tightly connected - not event-driven.
*/
