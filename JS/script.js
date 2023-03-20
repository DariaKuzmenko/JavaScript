// Об'єкти //



// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for(const item of this.items){
//         if (item.name === product.name){
//             item.quantity += 1;
//             return;
//         }
//     }
//     const newProduct = {
//         ...product,
//         quantity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(productName){
//     const {items} = this;
//     for( let i = 0; i < this.items.length; i += 1 ) {
//         const item = this.items[i];
//         if(productName === item.name){
//             console.log(`нашли такой продукт`,productName);
//             console.log(`индекс`, i);

//             this.items.splice(i,1);
//         }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const {items} = this;
//     let total = 0;
//     for( const {price, quantity} of items){
//         total += price + quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     const {items} = this;
//     for(const item of items){
//         if  (productName === item.name){
//             item.quantity += 1;
            
//         }
//     }
//   },
//   decreaseQuantity(productName) {
//     const {items} = this;
//     for(const item of items){
//         if  (productName === item.name){
//             item.quantity -=1;
//         }
//     }
//   },
// };
// console.table(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'mango', price: 60});
// cart.add({ name: 'lemon', price: 60});
// cart.add({ name: 'lemon', price: 60});
// cart.add({ name: 'strawbery', price: 110});
// cart.add({ name: 'strawbery', price: 110});
// cart.add({ name: 'strawbery', price: 110});


// console.table(cart.getItems());
// cart.countTotalPrice()
// cart.increaseQuantity("lemon")
// cart.increaseQuantity("lemon")
// cart.increaseQuantity("lemon")
// cart.decreaseQuantity('strawbery')
// cart.decreaseQuantity('lemon')
// console.table(cart.getItems());


// const user = {
//     name: 'Daria', 
//     age: 27,
//     language: 'ukranian',
//     hobby: 'cooking',
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// console.log(user)



// const salaries = {
//     Andrii: 3000,
//     Daria: 2000,
//     Oleg: 3000,
//     Olga: 1500,
// };

// function getResult() {
//     const salari = Object.values(salaries);
//     let summa = 0;
//     for(const item of salari){
//         summa += item;
//         console.log(summa)
//     }
    
// }
// console.log(getResult(salaries))



// const stones = [
//     { name: 'Смарагд', price: 1300, quantity: 4 },
//     { name: 'Діамант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Топаз', price: 500, quantity: 10 },
//     { name: 'Аквамарин', price: 200, quantity: 8 },
// ];

// function calcTotalPrice(stones, stoneName){
//     for(const stone of stones){
//         if(stoneName === stone.name){
//             const summa = stone.price * stone.quantity;
//             console.log(summa)
//         }
//     }
// }
// console.log(calcTotalPrice(stones,'Діамант' ))



// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const account = {
//     balance: 0,

// transactions: [],

// createTransaction(amount, type) { 
//     const transaction = {amount, type, id: this.transactions.length};

//     return transaction;
// },

// deposit(amount){
//     this.balance += amount;

//   const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

//   this.transactions.push(transaction);
// },

// withdraw (amount){
//     if(amount > this.balance){
//         console.log(`Зняття ${amount} не можливе - недостатньо коштів`);
//     } else {
//         this.balance -= amount

//         const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        
//         this.transactions.push(transaction);
//     }
// },
// };

// console.log(account);
// account.deposit(10000);
// account.deposit(20000);
// account.withdraw(10000);
// account.withdraw(45000);
// console.log(account);



// const user = {
//     email: "mango@mail.com",
//     age: 20
// };
// const { username } = user;
// console.log(username);