{
  /**
   * Type Assertions ๐ฉ
   *
   * JS์ ์ฐ๋ํ์ฌ ์ธ๋ ๋ถ๊ฐํผํ๊ฒ ์ฌ์ฉํ  ๊ฒฝ์ฐ๊ฐ ์๋ค.
   */

  // ์๋ฐ์คํฌ๋ฆฝํธ์ด๊ธฐ๋๋ฌธ์ ๋ฆฌํด๋๋ ํ์์ ํ์์คํฌ๋ฆฝํธ๋ ์ ์ ์์ง๋ง ๋ด๋ถ์ ์ผ๋ก ํญ์ ๋ฌธ์์ด์ ๋ฆฌํดํ๋ ํจ์๊ฐ ์๋ค๊ณ  ๊ฐ์ .
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); //result๊ฐ ๋ถ๋ชํ string type ์์ ์๊ณ ์์ผ๋ฏ๋ก as string ์ผ๋ก ๊ฐ์ฃผํ๋ค๊ณ  ์ ๋๊ฒ.
  console.log((<string>result).length); //result๊ฐ ๋ถ๋ชํ string type ์์ ์๊ณ ์์ผ๋ฏ๋ก as string ์ผ๋ก ๊ฐ์ฃผํ๋ค๊ณ  ์ ๋๊ฒ.

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; //! ์ง์ง ํ์ ํ ๋.
  numbers.push(2); // ๐ฑ

  const button = document.querySelector("class")!;
}
