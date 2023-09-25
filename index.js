//task1: Write a function that can calculate the average of a array of values (numbers)//
function calculateAverage(numbers) 
{
    if (numbers.length === 0) {
      return 0; 
    }
    const sum = numbers.reduce((digit, curr_Value) => digit + curr_Value, 0);
    const average = sum / numbers.length;
    return average;
    }
  // Example usage:
  const numbers = [10, 29, 45, 90, 5];
  const avg = calculateAverage(numbers);
  console.log(`The average is: ${avg}`);

  /*task3: Write an object of person with key values as below and print the values of the object not keys
    - name, age, country, semester, cms
    - List of inner object contains (details): contactNumber1 & email1, 
    contactNumber2 & email2, contactNumber3 & email3*/
    // Create a person object with the specified key-value pairs.
const person = {
    name: "Yasmine",
    age: 21,
    country: "Pakistan",
    semester: "Spring 2023",
    cms: "12345",
    details: {
      contactNumber1: "123-456-7890",
      email1: "Yasmine@gmail.com",
      contactNumber2: "987-654-3210",
      email2: "Yasmine@yahoo.com",
    }
  };
  
  // Print the values of the person object.
  console.log("Name: " + person.name);
  console.log("Age: " + person.age);
  console.log("Country: " + person.country);
  console.log("Semester: " + person.semester);
  console.log("CMS: " + person.cms);
  console.log("Contact Number 1: " + person.details.contactNumber1);
  console.log("Email 1: " + person.details.email1);
  console.log("Contact Number 2: " + person.details.contactNumber2);
  console.log("Email 2: " + person.details.email2);

  //task2//
  const values = [10, 20, 30, 40, 50];

const result = values.map((value, index) => {
  return `Value at index ${index} is ${value}`;
});

result.forEach((message) => {
  console.log(message);
});