function incheToFeet(number){
    const feetNumber = parseInt(number/12);
    const incheNumber = number%12;

    return feetNumber+" feet " + incheNumber+" inche";
}

console.log(incheToFeet(75));