function callBack(n){
    if(n>2){
        return true;
    }
    return false;
}
function callBack2(n){
    if(n<2){
        return true;
    }
    return false;
}

function filter(arr,callBack){
    let result=[];
    for(var i = 0;i<arr.length;i++){
        var n = arr[i];
        if(callBack(n)){
            result.push(n);
        }
    }
    return result;
}
let ar = [1,2,3,4,5];
console.log('hello');
console.log(filter(ar,callBack));