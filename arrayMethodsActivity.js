// arrayMethodsActivity.js

// Use concat() to join two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log("Combined Array:", combinedArr); // Output: Combined Array: [ 'Cecile', 'Lone', 'Emil', 'Tobias', 'Linus' ]

// Use push() to add an element "Kiwi" to the fruits array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits); // Output: Fruits after push: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// Use unshift() to add two numbers 4 and 5 to the beginning of array1
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1); // Output: Array1 after unshift: [ 4, 5, 1, 2, 3 ]

// Use pop() to remove the last element from the fruits array
const removedFruit = fruits.pop();
console.log("Removed Fruit:", removedFruit); // Output: Removed Fruit: Kiwi
console.log("Fruits after pop:", fruits); // Output: Fruits after pop: [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// Use shift() to remove the first element from the array2
const array2 = [1, 2, 3];
const removedNumber = array2.shift();
console.log("Removed Number:", removedNumber); // Output: Removed Number: 1
console.log("Array2 after shift:", array2); // Output: Array2 after shift: [ 2, 3 ]

// Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Sorted Fruits:", fruits); // Output: Sorted Fruits: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Use slice() to create a new array containing a portion of the fruits array
const slicedFruits = fruits.slice(1, 3);
console.log("Sliced Fruits:", slicedFruits); // Output: Sliced Fruits: [ 'Banana', 'Mango' ]

// Use splice() to insert and remove elements in the months array
const months = ["January", "February", "March"];
months.splice(1, 1, "April", "May"); // Remove 1 element at index 1 and add "April" and "May"
console.log("Months after splice:", months); // Output: Months after splice: [ 'January', 'April', 'May', 'March' ]
