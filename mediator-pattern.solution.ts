/** --- Mediator Interface --- */
interface EventBus {
  subscribe(event: string, listener: (data?: any) => void): void;
  publish(event: string, data?: any): void;
}

/** --- Concrete Mediator --- */
class SimpleEventBus implements EventBus {
  private listeners: Record<string, ((data?: any) => void)[]> = {};

  subscribe(event: string, listener: (data?: any) => void): void {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(listener);
  }

  publish(event: string, data?: any): void {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => listener(data));
    }
  }
}

/** --- Components --- */
class Logger {
  constructor(private bus: EventBus) {}

  log(message: string) {
    console.log("LOG:", message);
    this.bus.publish("log_event", { message });
  }
}

class Analytics {
  constructor(private bus: EventBus) {
    this.bus.subscribe("log_event", this.onLogEvent.bind(this));
  }

  onLogEvent(data: any) {
    console.log("Analytics tracking event:", data.message);
  }
}

class NotificationService {
  constructor(private bus: EventBus) {
    this.bus.subscribe("log_event", this.onLogEvent.bind(this));
  }

  onLogEvent(data: any) {
    console.log("Notification sent:", data.message);
  }
}

/** --- Usage --- */
const bus = new SimpleEventBus();

const logger = new Logger(bus);
const analytics = new Analytics(bus);
const notifications = new NotificationService(bus);

logger.log("User clicked button");
logger.log("User signed out");

/*
Each component is fully independent.

Adding a new module (e.g. AuditService) only needs one line:
bus.subscribe("log_event", (data) => { ... })

Perfect for event-driven systems, front-end apps, or microservices.
*/
