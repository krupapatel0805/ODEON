// var dataObject = localStorage.getItem('movieDataObj');

// toggling between payment methods 
var rad = document.paymentsForm.payment_method;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function () {
        (prev) ? console.log(prev.value) : null;
        if (this !== prev) {
            prev = this;
        }
        var payValue = this.value;
        if (payValue == 'paypal') {
            document.querySelector('.paypal_details').classList.remove('d-none');
            document.querySelector('.card_details').classList.add('d-none');
        } else if (payValue == 'cardCD') {
            document.querySelector('.card_details').classList.remove('d-none');
            document.querySelector('.paypal_details').classList.add('d-none');
        }
    });
}

// adding values from ticket to summary 
document.getElementById("ga-ticket").addEventListener('change', value)
document.getElementById("sp-ticket").addEventListener('change', value)
function value(){
var ga = document.getElementById("ga-ticket").value;
document.getElementById("ga-quantity").innerHTML=ga;
console.log(ga);
let gaTotal = ga * 69.99;
document.getElementById("ga-total").innerHTML = " " + gaTotal.toFixed(2);


var sp = document.getElementById("sp-ticket").value;
document.getElementById("sp-quantity").innerHTML=sp;
console.log(sp);
let spTotal = sp * 59.99;
document.getElementById("sp-total").innerHTML = " " + spTotal.toFixed(2);

let fTotal = gaTotal + spTotal ;
document.getElementById("final-total").innerHTML = " " + fTotal.toFixed(2);
}