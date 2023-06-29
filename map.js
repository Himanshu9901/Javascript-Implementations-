let list = [1,3,4,5,6]
function map(arr,callBack){
    let result=[];
    for(var i=0;i<arr.length;i++){
        var n = callBack(arr[i])
        result.push(n);
    }
    return result;
}

function sqr(num){
    return num*num;
}
console.log(map(list,sqr));