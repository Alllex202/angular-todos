export class Todo {
  public id: number;
  public value: string;
  public isDone: boolean;

  constructor(id: number, value: string, isDone: boolean) {
    this.id = id;
    this.value = value;
    this.isDone = isDone;
  }
}
