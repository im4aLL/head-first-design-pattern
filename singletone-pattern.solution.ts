interface IState {
  [key: string]: any;
}

class ApplicationState {
  private static instance: ApplicationState;
  private data: IState;

  private constructor() {
    this.data = {};
  }

  static getInstance(): ApplicationState {
    if (!ApplicationState.instance) {
      ApplicationState.instance = new ApplicationState();
    }

    return ApplicationState.instance;
  }

  set(state: IState) {
    this.data = { ...this.data, ...state };
  }

  all() {
    return this.data;
  }
}

const state = ApplicationState.getInstance();
state.set({ a: 1 });

const state2 = ApplicationState.getInstance();
state2.set({ b: 1 });

console.log(state2.all());
