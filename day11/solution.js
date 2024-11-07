var flat = function (arr, n) {
    // return clean(arr, n);
    if(n===0) return arr;
    return arr.reduce((acc, val) =>{
        if(Array.isArray(val)){
            acc.push(...flat(val, n-1));
        }else{
            acc.push(val);
        }
        return acc;
    }, []);
};