//Duplicate-Free Array
// const duplicateArr = (arr2) => {
//   let newArr = [];
//   // for (let index = 0; index < arr2.length; index++) {
//   //     // const element = array[index];
//   //     // if (arr2[index] == arr2[index] + 1) {
//   //     //   newArr.filter(index);
//   //     // }
//   //   }
//   return arr2.filter((item, index) => arr2.indexOf(item) === index);
// };

// console.log(duplicateArr([1, 2, 3, 3, 1, 1, 2, 5]));

//TaskDescription: Write a method that reverts input Array
//Expected Result: [1,2,3] => [3,2,1]

// const reverseArr = (arr) => {
//   //return arr.reverse()
//   //for (let i=0,i<arr.length; i++){}
//   //return arr.map()

//   const reversedArr = [];
//   arr.forEach((element) => {
//     reversedArr.unshift(element);
//   });
//   return reversedArr;
// };

// console.log(reverseArr([1, 2, 4, 6, 7]));

//Clear these objecst [false, undefined, "", null]
// const arr = [false, undefined, "", 0, null, 1, 2, 3];
// const filterArr = (arr2) => {
//   return arr2.filter((element) => Boolean(element));
// };
// console.log(filterArr(arr));

//................................................................
//
// const objeectOne = {
//   name: "Tony",
//   greeting() {
//     console.log(this);
//   },
// };
// objeectOne.greeting();

const object = {
  name: "abc",

  adress: {
    city: "Rawalpindi",
    country: "Pakistan",
  },
  getAdress() {
    console.log("this is city ", `${this.adress.city}`);
    console.log("this is ccountry ", `${this.adress.country}`);
  },
};

object.getAdress();
