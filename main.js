let checkBox = document.querySelector('#selector-bar');
let Monthly = document.querySelectorAll('h3');
let Yearly = document.querySelectorAll('h4');
let anual =  document.querySelectorAll('.anual')



checkBox.addEventListener("click", function(){
    if(checkBox.checked){
        Yearly.forEach(price => price.style.display = 'none');
        Monthly.forEach(price => price.style.display = 'flex');
        checkBox.style.justifyContent = "flex-end";
        
    } else {
        Yearly.forEach(price => price.style.display = 'flex');
        Monthly.forEach(price => price.style.display = 'none');
        checkBox.style.justifyContent = "flex-start";
        anual.forEach(anual => anual.style.color = 'hsl(237, 63%, 64%)');
        
    } 

});

// const button = document.getElementById("selector-bar");
// button.addEventListener("click", myFunction);

// function myFunction() {
//     var monthPayment = document.getElementsByTagName("h3");
//     var annualPayment = document.getElementsByTagName("h4");
//     var i;
//     var n;

//     for (i = 0; i < monthPayment.length; i++) {
//         for (n = 0; n < annualPayment.length; n++) {
//             if (monthPayment[i].style.display === "none") {
//                 monthPayment[i].style.display = "block";
//                 annualPayment[i].style.display = "none";
//                 button.style.justifyContent = "flex-end"
//             } else {
//                 monthPayment[i].style.display = "none";
//                 annualPayment[i].style.display = "block";
//                 button.style.justifyContent = "flex-start"
//             }
//         }
//     }


// }