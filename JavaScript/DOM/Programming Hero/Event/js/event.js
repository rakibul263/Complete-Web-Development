const makeB = document.getElementById('makeBlue');
makeB.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

document.getElementById('btn-make-green').addEventListener('click',
    function makeGreen(){
        // console.log(53453);
        document.body.style.backgroundColor = 'green';
    })

document.getElementById('btn-make-gold').addEventListener('click',
    function (){
        document.body.style.backgroundColor = 'goldenrod'
    }
)