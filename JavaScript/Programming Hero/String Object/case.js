const subject = 'chemistry';
const book = 'Chemistry';

/* 
// all letter are uppercase
console.log(subject.toUpperCase());

// all letter are lowercase
console.log(book.toLowerCase());
 */

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book');
}else{
    console.log('I am not reading book');
}


const name1 = "Rakibul";
const name2 = "   rakibul  ";

if(name1.trim().toLowerCase() === name2.trim().toLowerCase()){
    console.log("two names are same. ");
}else{
    console.log("Two names are not same. ")
}
