//Question 1

let createCounter = () => {
  let count = 0;
  return {
    increment: () => {
      count++;
      console.log(count);
    },
    decrement: () => {
      count--;
      console.log(count);
    },
  };
};
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

// question 2

let createBankAccount = () => {
  let balance = 0;
  return {
    deposit: (amount) => {
      balance += amount;
      console.log(`Deposited ${amount}`);
    },
    withdraw: (amount) => {
      if (balance >= amount) {
        balance = balance - amount;
        console.log(`Withdrawn ${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },
  };
};
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined
