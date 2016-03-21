exports.unique=function(arr){
    var n=[];
    for(var i=0;i<arr.length;i++){
        if(n.indexOf(arr[i])==-1) n.push(arr[i]);
    }
    return n;
};