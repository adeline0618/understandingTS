{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  let num: number = -6;
  num = -124;
  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;
  /**
   * ts는 js와 연동하여 쓸 수 있는데, 그 경우 js에서 리턴 하는 타입을 모를 경우가 있다.
   * 그때 사용하지만 사용안하는 게 좋다.
   */

  // any 💩
  let anything: any = 0;
  anything = "hello";
  /**
   * 무엇이든 할당 할 수 있는 any 가능한 사용 않는게 좋다.
   *
   * unknown : 뭐가 될 지 모르겠어 ㅠㅠ
   * any :  어떤 것이든 다 담을 수 있어 ^^^
   */

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  /**
   * 함수에서 아무 것도 리턴 하지 않을 때 사용
   * 변수에 사용하는 경우는 드물다.
   * 변수에 void 선언 시 undefined 밖에 할당 할 수 없다.
   * (return; 이 생략되었다고 볼 수 있다)
   */

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  /**
   * 보통 app에서 error를 던질 때 사용 (예상치 못한, 핸들링 하지 못한)
   *
   */

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}

/**원시타입 제외 모든 객체 타입 할당,전달 가능
 * 광범위한 추상적인 타입은 피하는 게 좋다.
 */
