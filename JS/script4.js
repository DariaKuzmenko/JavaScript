// "use strict";
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// const dummyObj = Object.create({ message: "Это свойство обьекта прототипа" });
// dummyObj.message = "Это собственное свойство обьекта";
// console.log("dummyObj", dummyObj);
// console.log(dummyObj.message);

/////////////////////////////////////////////////////////////////
// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi ->this", this);
//   console.log("Hello:)");
// };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 35000,
// });
// console.log(myCar);
// myCar.sayHi();
// myCar.changePrice();

// const myCar2 = new Car({
//   brand: "BMW",
//   model: "X6",
//   price: 50000,
// });
// console.log(myCar2);
// myCar2.sayHi();
// myCar2.changePrice();

// const myCar3 = new Car({
//   brand: "Audi",
//   model: "A6",
//   price: 65000,
// });
// console.log(myCar3);
// myCar3.sayHi();
// myCar3.changePrice();
/////////////////////////////////////////
// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: "mango@mail.com", password: 11111 });

// mango.changeEmail("mymail@mail.com");
// console.log(mango);

///////////////////////////////////////////////

// class Storage{
//     constructor({ items })

//     getItems() {
//         return this.items;
//     }

//     addItem(newItem) {
//         return this.items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         if (this.items.includes(itemToRemove)) {
//             this.items.pop(itemToRemove);
//         }
//     }
// };

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

/////////////////////////////////////////////////

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//////////////////////////////////////////////

// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice (price){
//     if (price > Car.MAX_PRICE) {
//       return "Error! Price exceeds the maximum"
//     } else {
//       return "Success! Price is within acceptable limits"
//     }
//   }

//   // Change code below this line

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

/////////////////////////////////////////////////

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklistedEmails = [];

//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
