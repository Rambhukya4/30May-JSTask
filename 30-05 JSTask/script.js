let heading =  document.getElementById("js");
// heading.textContent="hi im ram"

// let stringMtd = "Hi My Name is Ram, Iam 25";

//length: Returns the length of the string.
// stringMtd=stringMtd.length;
// heading.textContent = stringMtd;



//charAt(index): Returns the character at the specified index.
// stringMtd=stringMtd.charAt(8);
// heading.textContent = stringMtd;

//includes(substring): Checks if the string contains the specified substring.
// stringMtd=stringMtd.includes('Rambabu');
// heading.textContent = stringMtd;


//indexOf(substring): Returns the index of the first occurrence of the specified substring.
// stringMtd=stringMtd.indexOf("R");
// heading.textContent = stringMtd;



//toLowerCase(): Converts the string to lowercase.
// stringMtd=stringMtd.toLowerCase();
// heading.textContent = stringMtd;



//toUpperCase(): Converts the string to uppercase.
// stringMtd=stringMtd.toUpperCase();
// heading.textContent = stringMtd;




//replace(searchValue, newValue): Replaces the first occurrence of the search value with the new value.
// stringMtd=stringMtd.replace("Ram","Madhu");
// heading.textContent = stringMtd;




//split(separator): Splits the string into an array of substrings based on the separator.
// stringMtd=stringMtd.split(",");
// heading.textContent = stringMtd;




//number methods
// let numMethod =123.45634556;


//toString(): Converts a number to a string.
// numMethod = numMethod.toString();
// heading.textContent =  numMethod;
// console.log(typeof(numMethod));



//toFixed(digits): Formats a number using fixed-point notation.
// numMethod = numMethod.toFixed(3);
// heading.textContent =  numMethod;


//toPrecision(digits): Formats a number to a specified length.
// numMethod = numMethod.toPrecision(7);
// heading.textContent = numMethod;



//toExponential(digits): Converts a number to exponential notation.
// numMethod = numMethod.toExponential(1);
// heading.textContent = numMethod;



// //Objects;
// let person={
//     firstName :"Rambabu",
//     secondName : "Bhukya",
//     age : 25,
//     qualification : "BTech in civil engineering",
//     isMarried : "Unmarried",
// }

// accessing the object with dot notation
// let obj = person.age
// let obj =`My name is ${person.firstName} ${person.secondName}, iam ${person.age} years old, I have completed my ${person.qualification},.`
// heading.textContent = obj;


// accessing the obj with bracket notation
// let obj =`My name is ${person["firstName"]} ${person["secondName"]}, iam ${person["age"]} years old, I have completed my ${person["qualification"]}, Iam ${person["isMarried"]}.`
// heading.textContent = obj;




const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    email: "alice@example.com"
  };
  
  // Using for...in loop to iterate over object properties
  for (const key in student) {
    if (student.hasOwnProperty(key)) {
      console.log(`${key}: ${student[key]}`);
    }
  }