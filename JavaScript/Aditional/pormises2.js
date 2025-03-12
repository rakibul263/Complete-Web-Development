function saveToDB(data){
    return new Promise((resolve, reject)=>{
        const internetSpeed = Math.ceil(Math.random()*10);
        if(internetSpeed > 5){
            resolve('Success: data saved successfully.');
        }else{
            reject('Failure: data is not saved successfully')
        }
    })
}


/* const result = saveToDB('javaScript');
console.log(result) */

saveToDB('javaScript')
.then((result)=>{
    console.log('1 -> data one is saved successfully');
    console.log(result);
    console.log('-------------------------------------')
    return saveToDB('Rakibul Hasan');
})
.then((result)=>{
    console.log('2 -> data two is saved successfully');
    console.log(result);
    console.log('-------------------------------------')
})

.catch((error)=>{
    console.log('data is not save successfully');
    console.log(error);
    console.log('??????????????????????????????????')
})