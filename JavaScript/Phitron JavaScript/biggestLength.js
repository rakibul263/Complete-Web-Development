const names = ["Rahim", "Karim", "Jobbar", "Salam", "Rakibul", "Bulbul Islam", "Arman Ho"];

const biggestLength = (array) => {
    let bigLen = array[0];

    for(let i=0;i<array.length;i++){
        let element  = array[i];
        
        if(element.length > bigLen.length){
            bigLen = array[i];
        }
    }

    return bigLen;
}

let result = biggestLength(names);

console.log(result);