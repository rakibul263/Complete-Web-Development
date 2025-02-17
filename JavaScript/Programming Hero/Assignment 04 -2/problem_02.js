function validContact(contact){
    if(typeof contact == 'string'){
        if(contact.length == 11 && contact[0] == '0' && contact[1] == '1' && contact.includes("")){
            return true;
        }else{
            return false;
        }
    }else{
        return 'Invalid';
    }
}


const val1 = validContact("01819234567");
console.log(val1);
const val2 = validContact("0181923 4567");
console.log(val2);
const val3 = validContact("018192345679");
console.log(val3);
const val4 = validContact(["01987654321"]);
console.log(val4);
const val5 = validContact("01345678900");
console.log(val5);
const val6 = validContact("02145678900");
console.log(val6);
const val7 = validContact(true);
console.log(val7);
