// console.log("hello");
// const num = 30;

// if(num > 20){
//     console.log("Yes! Number is greater then 20");
// }
// else {
//     console.log("No! number is not grater then 20")
// }

// const friend_list = ["Shuvo", "Arman", "Bulbul"];
// friend_list.push("Alamin");
// friend_list.unshift("Kodu");

// console.log(friend_list);
// console.log(friend_list[0]);


// const sum = (a, b) => a+b;
// const ans = sum(1,2)
// console.log(ans);


const handelAddToStorage = () => {
    const name = document.getElementById("name").value;
    const id  = document.getElementById("id").value;
    // localStorage.setItem(id, name);
    const data = { id , name }
    // localStorage.setItem(data);
    // console.log(data);
    localStorage.setItem(id, JSON.stringify(data))
}