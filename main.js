


let Screen1 = document.querySelector('#firstSection');
let Screen2 = document.querySelector('#secondSection');
let Screen3 = document.querySelector('#thiredSection');
let Loader = document.querySelector('#loader');
let logo = document.querySelector('#logo');

document.querySelector("#logo").addEventListener('click', () => {
    location.reload();
});

document.querySelector('#next_1').addEventListener('click', () => {
    Screen1.classList.toggle('hidden');
    Screen2.classList.toggle('hidden');
});

document.querySelector('#next_2').addEventListener('click', () => {
    Screen2.classList.toggle('hidden');
    Screen3.classList.toggle('hidden');
});

document.querySelector('#next_3').addEventListener('click', () => {
    Screen3.classList.toggle('hidden');
    Loader.classList.toggle('hidden');


});


function out() {
    console.log('City: ');
}



