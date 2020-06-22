
var array1 = [2,4,5,3,6,2,5,4]
var array2 = [2,4]





function destroyer (arr,arr2){

    var args = arr.slice.call(arr2)
return    arr.filter((val)=>{
        return !args.includes(val)
    })
}

console.log(destroyer(array1,array2))


