var array =[
    [20,300,10,99],
    [345,567,91,21,34],
    [247,21,45,65,2],
    [21,46,778,43,45]
]


function largestValues(array){

    return array.map(innerArray =>
        {
            return innerArray.reduce((prevValue,currValue)=>
            {
                return currValue > prevValue ? currValue : prevValue
            })
        })

}

console.log (largestValues(array))



//apply.bind method 

console.log("values:"+ array.map(Function.apply.bind(Math.max,null)))