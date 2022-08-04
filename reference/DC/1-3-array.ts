{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {} //변경 할 수 없고 readonly!

  // Tuple -> interface, type alias, class로 대체하는 것이 좋다. (가독성때문에)
  //서로 다른 타입의 data 담을 수 있다. (고정)
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
