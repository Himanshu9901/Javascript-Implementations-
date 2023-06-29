function forEach(num,callBack)
{
    for(var i=0;i<num.length;i++)
    {
        if(callBack.length==2)
        {
            callBack(num[i],i);
        }
        else if(callBack.length==1)
        {
            callBack(num[i]);
        }
    }
}
function function1(string,idx)
{
    console.log(idx+": "+string);
}
function function2(string)
{
    console.log(string);
}
names=['himanshu','anuj','akash']
forEach(names,function1);
forEach(names,function2);