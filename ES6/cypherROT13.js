var str = "LBH QVQ VG!"

function rot13(str){
    var characters = str.split('')

    return characters.map((char)=>{
     var code = char.charCodeAt(0)
     if ((code > 65 && code < 90) || (code > 97 && code < 122) ){
         if (code < 78){
             return String.fromCharCode(code + 13)
         }else{
             return String.fromCharCode(code - 13)
         }
     }
    }).join('')
}

console.log(rot13(str))