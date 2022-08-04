let userInput: unknown; //any 와 다르다. 유저가 뭘 입력할 지 모를 때 사용한다.  
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);