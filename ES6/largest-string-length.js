
var string = "this  is shubham takankhar"
//method 1
function stringLength(str) {
var words = str.split(' ')
var maxLength = 0
words.forEach(word => {
  maxLength < word.length ? maxLength = word.length : NaN
})
return maxLength;
}

console.log(stringLength("Length of largest word is:"+string))

//method 2
/**
function test(str){
return str.split(' ').reduce((x,y)=>{
 return Math.max(x,y.length)
  },0
  )
  
}
console.log(test("hello world wasssupokl"))
 */