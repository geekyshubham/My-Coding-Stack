
function nullCheck(array){
   
    return array.filter(Boolean)
}

console.log(nullCheck([2,3,4,NaN,undefined,null,1]))