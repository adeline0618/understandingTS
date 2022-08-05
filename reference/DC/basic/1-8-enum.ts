{
  /**
   * Enum 여러가지 관련 상수값을 한 곳에 모아서
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  //JS에서 최대한 enum에 가깝게 정의하는 방법.
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  //enum 정의하고자 하는 이름
  enum Days {
    Monday = 1, //초기값 (문자열도 수동으로 전부 할당 가능)
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}

//enum 가능한 쓰지 않는 것이 좋다.
//enum으로 할당된 변수에 다른 어떤 것도 할당이 가능하다.
//day = Days.Tuesday;
//day = 10;

//union 타입 활용하는 것이 좋다. (web에서는 대부분 대체 가능)
// type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
