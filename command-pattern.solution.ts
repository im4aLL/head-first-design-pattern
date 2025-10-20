interface Command {
  execute(): void;
  undo(): void;
}

// Light and command classes
class Light {
  on() {
    console.log("Light is ON");
  }
  off() {
    console.log("Light is OFF");
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}
  execute() {
    this.light.on();
  }
  undo() {
    this.light.off();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}
  execute() {
    this.light.off();
  }
  undo() {
    this.light.on();
  }
}

// Remote control
class RemoteControl {
  private history: Command[] = [];

  executeCommand(command: Command) {
    command.execute();
    this.history.push(command);
  }

  undoLast() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

// usage
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.executeCommand(lightOn); // Light is ON
remote.executeCommand(lightOff); // Light is OFF
remote.undoLast(); // Light is ON (undo)
