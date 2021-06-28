var nav = document.querySelector('#nav_icon');
var nav_close = document.querySelector('#nav_close');
var nav_iteam =document.querySelector('.nav_items');

// Open Navigatin Bar Script
nav.addEventListener('click',()=>{
    nav.style="display:none";
    nav_close.style="display:block";
    nav_iteam.style="display:block";
});

//Closed Navigation Bar Script
nav_close.addEventListener('click',()=>{
    nav.style="display:block";
    nav_close.style="display:none";
    nav_iteam.style="display:none";
});
