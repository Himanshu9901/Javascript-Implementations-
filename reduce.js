list = [1.1,2.5,4.3,6.7]
function reduce(num,callBack){
    total = num[0];
    for(var i =1;i<num.length;i++){
        total = callBack(total,num[i]);
    }
    return total;
}

function sum(total,num){
    return total+num;
}
function sumRound(total,num){
    return total+Math.round(num);
}

console.log(reduce(list,sum));
console.log(reduce(list,sumRound));