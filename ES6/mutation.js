//check mutation of the array for complete word

function checkMutation(arr,arr2){
    if(arr.length == arr2.length){
        if(arr.toLowerCase() == arr2.toLowerCase()){
            return "strings are equal"
        }else{return "not equal"}
    }
    else{
        return "not equal"
    }
}

console.log(checkMutation("this","this"))

//check mutation of the array for letters

function mutation(arr,arr2){
    for (index = 0; index < arr.length; index++) {
        if (arr2.indexOf(arr[index]) == -1)   {
            return false
        } else {return true}
    }
}

console.log(mutation("this","llls"))
