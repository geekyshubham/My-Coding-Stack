//using es6 library

var str = "racecar"
function palindromeChecker(string){
reverse = string.split('').reverse().join('')

return reverse == string ? "It is palandrome" : "not palandrome"
}
console.log(palindromeChecker(str))


//