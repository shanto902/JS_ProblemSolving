// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseString = (inputString) => {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
};

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNumbers = (numbersArray) => {
  let sum = 0;
  for (let number of numbersArray) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
};

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const mostFrequentElement = (arr) => {
  const elementCount = {};
  let maxCount = 0;
  let mostFrequentElem;

  for (let element of arr) {
    elementCount[element] = (elementCount[element] || 0) + 1;

    if (elementCount[element] > maxCount) {
      maxCount = elementCount[element];
      mostFrequentElem = element;
    }
  }

  return mostFrequentElem;
};

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
};

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (length) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?/{}[]";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (romanNumeral) => {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integerValue = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbol = romanNumeral[i];
    const nextSymbol = romanNumeral[i + 1];

    if (romanValues[currentSymbol] < romanValues[nextSymbol]) {
      integerValue -= romanValues[currentSymbol];
    } else {
      integerValue += romanValues[currentSymbol];
    }
  }

  return integerValue;
};

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (arr) => {
  if (arr.length < 2) {
    return "Array should have at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
};

// Test the function

const t1_reversedStr = reverseString("hello world");

const t2_positiveSum = sumOfPositiveNumbers([2, -5, 10, -3, 7]);

const t3_mostFrequent = mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);

const t5_result = calculator(10, "*", 5);

const t6_randomPassword = generateRandomPassword(12);

const t7_romanToInt = romanToInt("XXI");

const t8_secondSmallest = findSecondSmallest([2, -5, 10, -3, 7]);

// Test the function
console.log(t7_romanToInt); // Output: 2
