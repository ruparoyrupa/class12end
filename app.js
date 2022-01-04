

// const button = document.querySelector('.box button') ;

// // button.addEventListener('click',function () {
// //     alert();
// // });

// button.addEventListener('click',() => {
//    button.nextElementSibling.innerHTML = 'I love js';
// });



const cheak_button = document.querySelector('#agecheak') ;

const name  = document.querySelector('#name');

const year  = document.querySelector('#year');

const result = document.querySelector('#result');



cheak_button .addEventListener('click',() => {

    if ( name.value == '' || year.value == '' ) {
        result.innerHTML = `<p class = 'alert alert-danger'>All fields are required !</p>`
    }else{
    
    result.innerHTML = ageCal( name.value , year.value);

    name.value = '';
    year.value = '';

  
    
}
        
}) ;

// Marriage cheak


const marriagecheak = document.querySelector('#marriagecheak') ;

const name1  = document.querySelector('#name1');

const year1  = document.querySelector('#year1');

const gender  = document.querySelector('#gender');

const result1 = document.querySelector('#result1');



marriagecheak .addEventListener('click',() => {

    if ( name1.value == '' || year1.value == '' || gender.value == '') {
        result1.innerHTML = `<p class = 'alert alert-warning'>All fields are required !</p>`
    }else {
        result1.innerHTML = marriageCheak( name1.value , year1.value , gender.value );
    }
    
 

    
    name1.value = '';
    year1.value = '';
    gender.value = '';


   
   
 



        
}) ;





const ammount = document.querySelector('#ammount');

const currency = document.querySelector('#currency');

const out_put = document.querySelector('#output');

const cheak_bdt = document.querySelector('#cheakbdt');





cheak_bdt .addEventListener('click',() => {

     let pattr = /^[0-9.]*$/;

    if ( pattr.test( ammount.value ) == false ){
    
        out_put.innerHTML = `<p class = 'alert alert-danger'>Plz Input Right Data !</p>`
    }else if ( ammount.value == '' ) {
        out_put.innerHTML = `<p class = 'alert alert-warning'>Ammount Must Be Requird !</p>`
    }else if ( currency.value == currency .children[0].value ) {
        out_put.innerHTML = `<p class = 'alert alert-warning'>Currency Must Be Requird !</p>`
    }else if (currency.value == currency .children[1].value) {
        out_put.innerHTML = `<p class = 'alert alert-success'>${ ammount.value * currency .children[1].value } Taka</p>`
    }else if (currency.value == currency .children[2].value) {
        out_put.innerHTML = `<p class = 'alert alert-success'>${ ammount.value * currency .children[2].value } Taka</p>`
    }else if (currency.value == currency .children[3].value) {
        out_put.innerHTML = `<p class = 'alert alert-success'>${ ammount.value * currency .children[3].value } Taka</p>`
    }else if (currency.value == currency .children[4].value) {
        out_put.innerHTML = `<p class = 'alert alert-success'>${ ammount.value * currency .children[4].value } Taka</p>`
    }
    
    ammount.style.border = (ammount.value == '') ? '1px solid red' : '1px solid black';

    ammount.value = '';
    currency.value = '';
    
  




}) ;








const username = document.querySelector('#username');

const email = document.querySelector('#email');

const password = document.querySelector('#password');

const sign_up = document.querySelector('#signup');

const msg    = document.querySelector('.msg');

const mess    = document.querySelector('.mess');

const mess2    = document.querySelector('.mess2');


// sign_up .addEventListener('click',() => {
//     alert();
// })

sign_up .onclick = () => {

   let pattern = /^[a-z_]{4,12}$/;

    let pattren2 = /^[a-z0-9\._]*@[a-z0-9-]*\.[a-z]{2,9}$/;
    
    if ( username.value == '' || email.value == '' ||  password.value == '') {
        msg.innerHTML = `<p class = 'alert alert-warning'>All fields are required !</p>`
    }else if (pattern.test(username.value) == false ) {
        mess.innerHTML = `<p class = 'alert alert-warning'>Plz set a username !</p>`
    }else if (pattren2.test(email.value) == false ) {
        mess2.innerHTML = `<p class = 'alert alert-danger'>Plz set a email !</p>`
    }

    username.style.border = (username.value == '') ? '1px solid red' : '1px solid black';

    email.style.border = ( email.value == '') ? '1px solid red' : '1px solid black';

    password .style.border = (password .value == '') ? '1px solid red' : '1px solid black';

    username.value = '';
    email.value = '';
    password.value = '';

    // if (username.value == '') {
    //     username.style.border = '1px solid red'; 
    // }else{
    //     username.style.border = '1px solid black'; 
    // }




    };