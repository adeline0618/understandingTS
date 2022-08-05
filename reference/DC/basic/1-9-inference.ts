/**
 * Type Inference
 * 타입추론 언제 쓰면 안좋은지 알아보자.
 */
let text = "hello"; //자동으로 string으로 추론해줌. text=10   불가능.
function print(message = "hello") {
  //함수 인자에는 any가 할당된다. 인자에 어떤타입의 데이터가 들어갈 지 명시해주는 것이 좋다.
  console.log(message);
}
print("hello");

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);

//타입추론은 좋은 것일까?
//no. 간단한 예제에서는 예상이 가능하지만 프로젝트에서는 간단하지가 않다.
//원시타입에서는 간단히 추론가능하지만.. 함수에서는 되도록 리턴되는 타입을 명시해주는 것이 좋다.
//일관성 있게 프로그래밍 하는 것이 좋다.
