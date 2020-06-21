

function splashIt(array,num){
    array.splice(0,num)
    return array
}

console.log(splashIt([2,3,4,5,1,6],2))

var max = [2,3,4,5,6,9]
console.log(max.slice(2))