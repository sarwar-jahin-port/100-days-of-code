var makeFancyString = function(s) {
    let result="";
    for(let i=0; i<s.length; i++){
        if(i>1 && s[i]==s[i-1] && s[i-1]===s[i-2]){
            continue;
        }
        result+=s[i];
    }
    return result;
};