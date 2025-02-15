function uniqueArray (array) {
    const uniqueArrayList = [];

    for(const item of array){
        if(uniqueArrayList.includes(item) == false){
            uniqueArrayList.push(item);
        }
    }
    console.log(uniqueArrayList);
}

const arr = ['abul', 'kabul', 'dabul', 'babul', 'shubo', 'kabul'];
uniqueArray(arr);