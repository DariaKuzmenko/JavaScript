// Callback function//

// function handleProduct(productData, callback) {
//     callback(productData);
// }

// function logProduct(product) {
//     console.log(product);
// }

// function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
// }

// handleProduct(
//     {
//         name: 'apple',
//         price: 30,
//         quantity: 3,
//     },
//     logProduct
// )

// handleProduct(
//     {
//         name: 'lemon',
//         price: 20,
//         quantity: 5,
//     },
//     logTotalPrice
// )

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     firsname : 'Daria',
//     lastname: 'Kuzmenko',
//     balance: 618,
//     withdraw(amount, onSuccess, onError) {
//         if(amount > TRANSACTION_LIMIT){
//             onError(`Сумма є більшою за ліміт, залишок - ${this.balance}`)
//         } else if(amount > this.balance){
//             onError(`Сума зняття є більшою ніж є на балансі, залишок - ${this.balance}`)
//         } else {
//             this.balance -= amount;

//             onSuccess(`Операція зняття відбулась успішно, залишок - ${this.balance}`);
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if(amount > TRANSACTION_LIMIT){
//             onError(`Сума поповнення є більшою за ліміт транзакцій, залишок - ${this.balance}`)
//         } else if(amount <= 0){
//             onError(`Сумма поповнення є меншою або рівна нулю, залишок - ${this.balance}`)
//         } else {
//             onSuccess(`Поповнення відбулось успішно, залишок - ${this.balance}`)
//         }
//     },
// };

// function handleSuccess(message) {
//     console.log(`Succes! ${message}`);

// }

// function handleError(message) {
//     console.log(`Error! ${message}`);
// }

// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(6000, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// function each(array, callback) {
//     const resultArray = [];
//     for(let number of array){
//        const newValue =  callback(number);

//        resultArray.push(newValue);
//     }
//     return resultArray
// }

// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return value * 2;
//     })
// );

// console.log(
//     each([64, 49, 36, 25, 16],function (value) {
//         return value - 10;
//     })
// );

// console.log(
//     each([64, 49, 36, 25, 16],function (value) {
//         return Math.sqrt(value);
//     })
// );

// let cost;
// const subscription = "pro";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost);

/// MAP ///

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const playerNames = players.map((player) => {
//   return player.name;
// });

// const playerIds = players.map((player) => player.id);

// const res = players.map((player) => {
//   return {
//     name: player.name,
//     online: player.online,
//   };
// });

// const upatedPlayers = players.map((player) => ({
//   ...player,
//   timePlayed: player.timePlayed * 2,
// }));
// const playerIdToUpdate = "player-3";

// const upatedPlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// console.table(upatedPlayers);
// console.log("res", res);
// console.log("playerNames", playerNames);
// console.log("playerIds", playerIds);

/// FILTER ///

// const numbers = [5, 10, 15, 20, 25];
// const filterNumbers = numbers.filter((number) => {
//   console.log(number);

//   return number > 15;
// });

// console.log(filterNumbers);

/// FIND///

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find((number) => number === 10);
// console.log(number);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const playersToFind = "player-3";
// const playerWithId = players.find((player) => player.id === playersToFind);
// console.log(playerWithId);

// const playersToFind = "player-3";
// const findPlayerByid = (allPlayer, playerId) => {
//   return allPlayer.find(({ id })=> id === playersToFind)
// }
// console.log(findPlayerByid(players, 'player-1'))
// console.log(findPlayerByid(players, "player-4"));

///EVERY / SOME///

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const isAllOnline = players.every((player) => player.timePlayed > 200);
// console.log("isAllOnline:", isAllOnline);

// const isAnyOnline = players.some((player) => player.online);
// console.log("isAnyOnline:", isAnyOnline);

// const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
// console.log("anyHardcorePlayers:", anyHardcorePlayers);

/// REDUCE ///

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total)

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);
// console.log(totalSalary);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const totalTimePlayed = players.reduce((totalTime, player) => {
//   return totalTime + player.timePlayed;
// }, 0);
// console.log(totalTimePlayed);

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((total, { price, quantity }) => {
//   return total + price * quantity;
// }, 0);
// console.log(totalAmount);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// console.log(tagsStats);

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

// if (acc[tag]) {
//   return {
//     ...acc,
//     [tag]: acc.tag + 1,
//   };
// }

// acc[tag] = 1;

// return {
//   ...acc,
//   [tag]: 1,
// };

//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(tagsStats);
