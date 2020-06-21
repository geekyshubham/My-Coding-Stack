//library function
function repeatString(str,num){
   return str.repeat(num)
}

console.log(repeatString("hello",2))

//recurssive function
function repeat (str,num)
{
    return num > 0 ?  str + repeat(str,num-1) : ""
}

console.log(repeat("shubb",2))