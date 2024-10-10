import data from "./data.js";
console.log.clear;

// const finalArray = [];
// for (let obj of data) {
//   const fullName = `${obj.name.first} ${obj.name.last}`;
//   //   console.log(fullName);
//   const birthday = new Date(obj.dob.date).toDateString();
//   //   console.log(birthday);
//   finalArray.push({ fullName, birthday });
// }
// console.log(finalArray);

const finalArray = data.map((obj) => {
  const fullName = `${obj.name.first} ${obj.name.last}`;
  const birthday = new Date(obj.dob.date).toDateString();
  return { fullName, birthday };
});
console.log(finalArray);
