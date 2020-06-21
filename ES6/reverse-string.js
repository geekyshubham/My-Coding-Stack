var strings = "hello to the world"


var reverse = ''

//method 1 using split() by splitting all the elements into array then reversing the array using reverse and then joining all the elements of arrray to form string using join()

// reverse = string.split('')
// reverse = reverse.reverse()
// reverse = reverse.join('')

//method 2 similar to method 1 but using spread operator
 
// reverse = [...string].reverse().join('');
// console.log (reverse)


//method 3 for loop

// for (i = strings.length ; i >= 0 ; i--){
//      reverse += strings[i] 
// }

// console.log(reverse)

//using reduce

function reverseString(string){
return [...string].reduce((pValue,cValue)=>cValue += pValue,'')}

console.log(reverseString(strings))

//recursive

function reversse(str)
{
   return str ?  reverseString((str.substr(1))+str[0]) : str
}

console.log(reversse(strings))