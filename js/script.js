const myPromis = new Promise((resolve, reject) =>{

    const codeIsFine = false;


    if(codeIsFine){
        resolve("fine");
    }else{
        reject("error");  
    }

})
console.log(myPromis);
