interface IStack {
  push: (item: string) => void;
  pop: () => string;
  getTopElementValue: () => string;
}

class Stack implements IStack {
  private innerStack: string[];
  constructor(innerStack: string[]) {
    this.innerStack = innerStack;
  }

  //Push an item onto the stack
  public push(item: string): void {
    this.innerStack.splice(0,0,item);
  }

  //Remove and return an item from the top of the stack
  public pop(): string {
    const value = this.innerStack[0];
    this.innerStack.splice(0, 1);
    return value;
  }

  //Return the top most element value
  public getTopElementValue(): string {
    return this.innerStack[0];
  }

  //String out the stack
  public toString(): string {
    let out = "";
    this.innerStack.forEach((itemValue) => {
      out += `${itemValue},`;
    });
    return out;
  }
}

export default Stack;
