

//method 1 recursion

function   factorize (num){

   return num <= 0 ? 1 : num * factorize (num - 1)
 
}
console.log( factorize (4))


//method 2 loop

// function factorize (num){
//     var factorial = 1;
//     for (i = num ; i > 0 ; i--){
//         factorial *= i;
//     }
//     return factorial;
// }

// console.log(factorize(4))