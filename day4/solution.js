var debounce = function(fn, t) {
    
    let timer;
    return function(...args) {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, args);
        },t);
    }
};