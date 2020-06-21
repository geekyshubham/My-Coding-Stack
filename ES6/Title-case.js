var string ="this is My fist test"


function capitalizeFirstLetter(string) {
var strip = string.split(' ')
    var UpperCased = strip.map(word => {
       return word.charAt(0).toUpperCase() + word.substr(1)
    });

  return UpperCased.join(" ")

  }
    console.log(capitalizeFirstLetter(string))



    //REGEX

 var lowered = string.replace(/(^\w|\s\w)/g,letter => letter.toUpperCase())
 console.log("regex:"+ lowered)


 //loop

 strip = string.split(' ')
function UpperCaseTitle(str){
var check = strip.map(ele=>{
    return ele[0] ? ele[0] = ele[0].toUpperCase() + ele.substr(1) : ele
})
return check.join(" ")
}
console.log(UpperCaseTitle(strip))