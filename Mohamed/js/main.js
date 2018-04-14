
//$(document).ready(function(){
//    
//    
//  $('.carousel').carousel({
//  interval: 2000
//});  
//    
//});


var x=document.getElementById('del')
window.onload=function(){
    
    setTimeout(function() {
 x.style.visibility="hidden"; 
}, 0);
  
};


var scrol=document.getElementById("scrol-top");

window.onscroll=function(){
     console.log(document.body.scrollTop);
    
    if(document.body.scrollTop<=300){
        scrol.style.visibility="hidden";
        
        
        
        
    }
    else
            {
               scrol.style.visibility="visible";  
            }
    
    
};

scrol.onclick=function(){
    
"use strict"
    window.scrollTo(0,0);
    
    
    
};

//$(window).load(function(){
//    
//    $(".loading1").fadeOut(1000);
//    
//    
//});

var h= document.querySelectorAll("h1, h2, h3, h4, h5, h6");


    for (var i = 0; i < h.length; i++) {
      
            h[i].classList.add("font-effect-shadow-multiple");
        
    };


	




