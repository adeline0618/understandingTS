{
  // Array
  const fruits: string[] = ["π", "π"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {} //λ³κ²½ ν  μ μκ³  readonly!

  // Tuple -> interface, type alias, classλ‘ λμ²΄νλ κ²μ΄ μ’λ€. (κ°λμ±λλ¬Έμ)
  //μλ‘ λ€λ₯Έ νμμ data λ΄μ μ μλ€. (κ³ μ )
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
