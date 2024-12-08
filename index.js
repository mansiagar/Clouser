// Question 1

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
