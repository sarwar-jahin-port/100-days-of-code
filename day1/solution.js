async function sleep(millis) {
    const myPromise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve();
        }, millis);
    })

    myPromise.then(()=>console.log(millis));
    return myPromise;
}