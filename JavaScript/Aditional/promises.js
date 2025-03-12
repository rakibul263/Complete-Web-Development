/* function saveToDB(data, success, failure) {
  const internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

saveToDB(
  "Rakibul Hasan",
  () => {
    console.log("Success: Your data is save to the database");
    saveToDB(
      "Aysha",
      () => {
        console.log("Success 2: data 2 saved");
        saveToDB(
          "Daffodil",
          () => {
            console.log("success 3: data 3 id saved");
          },
          () => {
            console.log("Failure 3: Data 3 is not saved");
          }
        );
      },
      () => {
        console.log("Failure 2: Your data 2 is not save");
      }
    );
  },
  () => {
    console.log("Failure:  Your Internet connection is week.");
  }
);
 */

function saveToDB(data){
    return new Promise((resolve, reject) =>{
        const internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve('Success : Data is saved');
        }else{
            reject('Failure: Data is not saved');
        }
    })
}

const request =  saveToDB('Daffodil International Universtiy');
request.then(()=>{
    console.log('Promises was fulfiled');
    return saveToDB('Computer Science')
})
.then(()=>{
    console.log('promises was fulfiled data 2 is saved.');
    return saveToDB('5th semester');
})
.then(()=>{
    console.log('data3 was saved successfully');
})
.catch(()=>{
    console.log('Promises was rejected')
})