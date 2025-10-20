class Light {
  on() {
    console.log("Light is ON");
  }
  off() {
    console.log("Light is OFF");
  }
}

class RemoteControl {
  pressButton(action: string, light: Light) {
    if (action === "ON") {
      light.on();
    } else if (action === "OFF") {
      light.off();
    }
  }
}

const light = new Light();
const remote = new RemoteControl();

remote.pressButton("ON", light);
remote.pressButton("OFF", light);

/*
RemoteControl is tightly coupled to Light.
Hard to extend for other devices (Fan, TV, Door).
Hard to implement undo or queue actions.
*/
