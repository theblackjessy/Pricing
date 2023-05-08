let checkBox = document.querySelector('input');
let prices = document.querySelectorAll('.price');


function checkBoxClick(){
    prices.forEach( price => price.classList.toggle("hide"))
    console.log('clicked');
}

checkBox.addEventListener("click", checkBoxClick);

