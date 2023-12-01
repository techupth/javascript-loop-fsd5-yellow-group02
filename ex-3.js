// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;

// ข้อนี้ผมทำโดยใช้ Chat GPT ช่วยครับ //

minNumber = 0;
minNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = Math.min(numbers[i]);
  }
}

console.log(minNumber);
