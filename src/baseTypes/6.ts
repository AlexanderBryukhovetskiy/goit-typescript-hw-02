/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number) : number {
  return num1 + num2;
}

// I'm not sure about this:
function customError(argument: any): never {
  throw new Error('Error');
}

export {};