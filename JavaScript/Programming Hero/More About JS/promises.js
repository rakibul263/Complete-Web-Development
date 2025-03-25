function orderFurniture(furniture){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(furniture === 'Almari'){
                resolve('Almari is ready');
            }else if(furniture === 'Table'){
                reject('Making table is not possible.')
            }else{
                reject('Not Match');
            }
        })
    })
}

orderFurniture('Table')
    .then((result)=>{
        console.log(result);
    })
    .catch((error) =>{
        console.log(error);
    })