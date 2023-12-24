// console.log("hello world")

// 1. WAP to greet a person given their first and last name

// let firstName = "Gurkunwar";
// let lastName = "Singh";
// console.log("Good Afternoon " + firstName + " " + lastName);

// // 2. WAP that greets a person based on their gender. (ifelse)

// let gender = true;

// if (gender){
//     console.log("Morning")
// }else{ console.log("you're a woman!!") }

// // 3. WAP that counts from 0 - 1000 and prints (for loop)
// let x = 0;
// for(let i = 0; i <= 10; i = i+1){
//     x = x + i;
// }
// console.log(x)

// WAP that prints all the even numbers in an array
// const ages = [21, 23, 54, 65, 12];

// for (let i = 0; i < ages.length; i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i])
//     }
// }

// WAP that prints all the male people's first name given a complex object

// const allUsers = [{
//     firstName: "Gurkunwar",
//     gender: "male"
// }, {
//     firstName: "Kirat",
//     gender: "male"
// }, {
//     firstName: "Priya",
//     gender: "female"
// }]

// for(let i=0; i< allUsers.length; i++){
//     if(allUsers[i]["gender"] == "male"){
//         console.log(allUsers[i]["firstName"])
//     }
// }

//WA function that finds the sum of two numbers

// function sum(a, b){
//     return a + b;
// }
// console.log(sum(1,2))

// way to pass a funtion as an argument or a callback
function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}
function displayResult(data){
    console.log("result of the sum is: " + data)
}
function displayResultPassive(data){
    console.log("Sum's result is : " + data)
}
const ans = sum(1, 2, displayResult)


// WA function that displays this result in a pretty format

// WA function thay takes this sum and prints it in passive tense