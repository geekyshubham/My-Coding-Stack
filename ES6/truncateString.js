

function truncateString(str,len){
    str.length == len ? "String is of "+len+" size" : ""
    return str.length < len ? "string is smaller to truncate" : str.slice(0,len)
}

console.log(truncateString("hello world",7))