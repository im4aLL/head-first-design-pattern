import type { IObserver } from "./observer.interface";

export interface ISubject<T> {
  registerObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(data: T): void;
}
