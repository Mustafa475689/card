"use strict"

// submit button variable
let submit = document.getElementById('submit')

submit.addEventListener('click',  () => {
// Asign variables
// input variables
let name = document.getElementById('reg-name').value
let email = document.getElementById('reg-email').value
let  website = document.getElementById('reg-link').value
let image = document.getElementById('reg-img').value

// variable for radio buttn 
let radioButton = document.querySelector('input[type="radio"]:checked');

// Variable for CheckBox

let skill = [];
 document.querySelectorAll('input[type="checkbox"]').forEach(item => {
if(item.checked === true){
    skill[item.value] = true;
}else if(item.checked === false){
    skill[item.value] = false;
    
}

});

//console.log(CheckBox.value)

// Console Panel
console.log(skill)
console.log(name)
//console.log(radioButton)

 document.getElementById('card').innerHTML += `<p class-"name">${name}</p>
                                                    <p class-"email">${email}</p>
                                                    <p class-"web">${website}</p>                                   
                                                    <img class="img" src="${image}">
                                                    <p class-"radio">${radioButton.value}</p>
                                                    <p class-"checkbox">${skill}</p>
                                                      `                                      

})


