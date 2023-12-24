// map, filter and arrow fns


// const sum = (a,b) => {
//     return a + b;
// }
// const ans = sum(1,2);
// console.log(ans);


// given an array, give me back a new array in which every value is multiplied by 2

const input = [1,2,3,4];
let newArr = input.map((i) => {
    return i*2;
})

// another way
// for(let i=0; i<input.length; i++){
//     newArr.push(input[i] * 2);
// }
console.log(newArr);


// given an input array, give me back all the even values from it

const filArr = input.filter((i)=>{
    if(i%2 == 0){
        return true;
    }
    return false;
})
console.log(filArr);