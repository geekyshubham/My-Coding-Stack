

var array =[2,3,5,6,3,2,2]


function postioner(arr,ele){

    var array = arr.sort()
  
    return  array.some(element => {

         if (element > ele){
        console.log(element)
        return element

        }
        else{
            NaN
        }
    })
}


console.log (postioner(array,4))