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
  let name: undefined; // π©
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null;

  // unknown π©
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;
  /**
   * tsλ jsμ μ°λνμ¬ μΈ μ μλλ°, κ·Έ κ²½μ° jsμμ λ¦¬ν΄ νλ νμμ λͺ¨λ₯Ό κ²½μ°κ° μλ€.
   * κ·Έλ μ¬μ©νμ§λ§ μ¬μ©μνλ κ² μ’λ€.
   */

  // any π©
  let anything: any = 0;
  anything = "hello";
  /**
   * λ¬΄μμ΄λ  ν λΉ ν  μ μλ any κ°λ₯ν μ¬μ© μλκ² μ’λ€.
   *
   * unknown : λ­κ° λ  μ§ λͺ¨λ₯΄κ² μ΄ γ γ 
   * any :  μ΄λ€ κ²μ΄λ  λ€ λ΄μ μ μμ΄ ^^^
   */

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // π©

  /**
   * ν¨μμμ μλ¬΄ κ²λ λ¦¬ν΄ νμ§ μμ λ μ¬μ©
   * λ³μμ μ¬μ©νλ κ²½μ°λ λλ¬Όλ€.
   * λ³μμ void μ μΈ μ undefined λ°μ ν λΉ ν  μ μλ€.
   * (return; μ΄ μλ΅λμλ€κ³  λ³Ό μ μλ€)
   */

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // π©

  /**
   * λ³΄ν΅ appμμ errorλ₯Ό λμ§ λ μ¬μ© (μμμΉ λͺ»ν, νΈλ€λ§ νμ§ λͺ»ν)
   *
   */

  // objet
  let obj: object; // π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}

/**μμνμ μ μΈ λͺ¨λ  κ°μ²΄ νμ ν λΉ,μ λ¬ κ°λ₯
 * κ΄λ²μν μΆμμ μΈ νμμ νΌνλ κ² μ’λ€.
 */
