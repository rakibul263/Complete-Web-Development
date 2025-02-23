console.log("Hello from JS.");

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}

const headingText = document.getElementsByTagName('h1');
for(const heading of headingText){
    console.log(heading.innerText);
}

const for_class = document.getElementsByClassName('place_name');
// console.log(for_class);
for(const place of for_class){
    console.log(place)
}

//querySelectorAll
// const all_li = document.querySelectorAll('.fruits-container li');
// // console.log(all_li);
// for(const li of all_li){
//     consonle.log(li.innerText);
// }

const heading_element = document.getElementById('heading');
heading_element.style.color  = 'green';
heading_element.style.backgroundColor = 'orange';
// console.log(heading_element.style)
