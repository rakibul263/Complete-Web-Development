const names = ["Shuvo", "Ragib", "Arman", "Bulbul", "Hasib", "Aysha", "Asha", "Mili"];

// console.log(names.includes("Ragib"));
let found = names.includes("Ragib"); //it's a case sensative
// console.log(found);
if(found){
    console.log("Name is Found");
}else{
    console.log("Name isn't Found.");
}