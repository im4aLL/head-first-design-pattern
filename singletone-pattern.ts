interface IState {
  [key: string]: any;
}

class ApplicationState {
  private data: IState;

  constructor() {
    this.data = {};
  }

  set(state: IState) {
    this.data = { ...this.data, ...state };
  }

  all() {
    return this.data;
  }
}

const state = new ApplicationState();
state.set({ a: 1 });

const state2 = new ApplicationState();
state2.set({ b: 1 });

console.log(state2.all());

/*
Here problem is ApplicationState can be initialized from different part of application. If everyone can create new instance, you will lose previous state.
*/
