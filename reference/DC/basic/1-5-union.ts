{
  /**
   *  Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function _move(direction: Direction) {
    console.log(direction);
  }
  _move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;
  // 발생할 수 있는 모든 케이스 중에 하나만 할당 할 수있다.

  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): Promise<LoginState> {
    return new Promise((resolve, reject) => {
      resolve({
        response: {
          body: "logged in!",
        },
      });
    });
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
