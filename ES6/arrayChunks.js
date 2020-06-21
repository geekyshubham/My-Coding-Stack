
function chunkyMonkey(array,num){
    var temp = []
    for(i = 0;i < array.length ; i += num)
    {
        temp.push(array.slice(i,i+num))
    }
    return temp
}

var arr = [2,3,4,2,3,4,5]

console.log(chunkyMonkey(arr,3))

//using splic 
function splicing(arr,num){
    var splicedArray = []
    while (arr.length){
        splicedArray.push(arr.splice(0,num))
    }
    return splicedArray
}

console .log(splicing(arr,2))