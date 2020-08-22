/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-hide").style.top = "0";
  } else {
    document.getElementById("navbar-hide").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};

// /* Open then the dropdown menu when a button is clicked. */
let dropdownBtn1 = document.querySelector('.menu-btn1');
let dropdownBtn2 = document.querySelector('.menu-btn2');
let dropdownBtn3 = document.querySelector('.menu-btn3');
let menuContent1 = document.querySelector('.menu-content1');
let menuContent2 = document.querySelector('.menu-content2');
let menuContent3 = document.querySelector('.menu-content3');

dropdownBtn1.addEventListener('click',()=>{
   if(menuContent1.style.display===""){
      menuContent1.style.display="block";
   } else {
      menuContent1.style.display="";
   }
});

dropdownBtn2.addEventListener('click',()=>{
  if(menuContent2.style.display===""){
     menuContent2.style.display="block";
  } else {
     menuContent2.style.display="";
  }
});

dropdownBtn3.addEventListener('click',()=>{
  if(menuContent3.style.display===""){
     menuContent3.style.display="block";
  } else {
     menuContent3.style.display="";
  }
});



