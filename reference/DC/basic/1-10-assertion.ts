{
  /**
   * Type Assertions 💩
   *
   * JS와 연동하여 쓸때 불가피하게 사용할 경우가 있다.
   */

  // 자바스크립트이기때문에 리턴되는 타입을 타입스크립트는 알 수 없지만 내부적으로 항상 문자열을 리턴하는 함수가 있다고 가정.
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); //result가 분명히 string type 임을 알고있으므로 as string 으로 간주한다고 적는것.
  console.log((<string>result).length); //result가 분명히 string type 임을 알고있으므로 as string 으로 간주한다고 적는것.

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; //! 진짜 확신할때.
  numbers.push(2); // 😱

  const button = document.querySelector("class")!;
}
