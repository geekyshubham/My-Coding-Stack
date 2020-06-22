

var array =[2,3,5,6,3,2,2]

//method 1

// function postioner(arr,ele){

//     var array = arr.sort()
  
//     return  array.some(element => {

//          if (element > ele){
//         console.log(element)
//         return element

//         }
//         else{
//             NaN
//         }
//     })
// }


// console.log (postioner(array,4))


//METHOD 2

var num = 3

function postioner(arr,num){
    var i =0
    arr.sort()
    while (num > arr[i]){
    i++
    }
    return i
}

console.log(postioner(array,num))