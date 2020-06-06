// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// const nameCapSentence = ( array) =>{
//   return array.map(value => {
//     let names = value.name.split(" ")
//     let capNames = names.map(name =>{
//        return name.charAt(0).toUpperCase() + name.substring(1)
//     })
//     let fullCapName = capNames.join(" ")
//     return `${fullCapName} is a ${value.occupation}`
//   })

// }
// console.log(nameCapSentence(people))


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

 const onlyRemainder = (array) =>{
  let numbers = array.filter(value =>{
    typeof value === "number"
    
  })
  return numbers
//  const onlyRemainder = (array) =>{
//   let numbers = array.filter(value => typeof value === "number")
//   return numbers.map(value => value %3)
    
  }
  console.log(onlyRemainder(testingArray1))






// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
 

const oneArrayNoDup = (array1,array2) =>{
  let oneArray = [...array1,...array2]
   
  let jointNoDup =   oneArray.filter((value, index) => oneArray.indexOf(value) === index);
    return jointNoDup
  
     
  
}
console.log(oneArrayNoDup(testingArray3,testingArray4))