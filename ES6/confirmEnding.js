//Method 1 using substr 
function checkEnding(str,end){
    return str.substr(-end.length) == end ? true : false
}

console.log(checkEnding("hello","slo"))