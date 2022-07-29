function add(n1);
// const person: {
//   name: string;
//   age: number;

// } = {
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: 'Swan',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleLowerCase());
}
