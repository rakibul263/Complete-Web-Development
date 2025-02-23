const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = 'solid 2px black'
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '20px';
    section.style.backgroundColor = 'lightgray';
}