var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elResult1 = document.querySelector('.js-result1');
var elResult2 = document.querySelector('.js-result2');
var elResult3 = document.querySelector('.js-result3');
var elResult4 = document.querySelector('.js-result4');


var elOnfoot = 3.6;
var elBycicle = 20.1;
var elCar = 70;
var elPlane = 800;

var elImputval = +elInput.value;

function chat(evt) {
    evt.preventDefault();
    if (elInput.value <= 0 || isNaN(elInput.value)) {
        elResult1.textContent = "Son kiriting";
        elResult1.style.color = 'white';
        elResult1.style.backgroundColor = 'red';
        
        elResult2.textContent = "Son kiriting";
        elResult2.style.color = 'white';
        elResult2.style.backgroundColor = 'red';

        
        elResult3.textContent = "Son kiriting";
        elResult3.style.color = 'white';
        elResult3.style.backgroundColor = 'red';

        
        elResult4.textContent = "Son kiriting";
        elResult4.style.color = 'white';
        elResult4.style.backgroundColor = 'red';

        return;
        
    } else {
        elResult1.style.color = 'white';
        elResult1.style.backgroundColor = 'green';

        elResult2.style.color = 'white';
        elResult2.style.backgroundColor = 'green';
    
        elResult3.style.color = 'white';
        elResult3.style.backgroundColor = 'green';
    
        elResult4.style.color = 'white';
        elResult4.style.backgroundColor = 'green';
    }

    var result1 = (elInput.value / elOnfoot).toFixed(2);

    var result2 = (elInput.value / elBycicle).toFixed(2);

    var result3 = (elInput.value / elCar).toFixed(2);

    var result4 = (elInput.value / elPlane).toFixed(2);
   

    elResult1.textContent = `${result1} hour`;

    elResult2.textContent = `${result2} hour`;

    elResult3.textContent = `${result3} hour`;

    elResult4.textContent = `${result4} hour`;
    
    return;

}

elForm.addEventListener('submit', chat);



