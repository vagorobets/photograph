$(document).ready(function(){
    $("nav li a").click(function () { 
        elementClick = $(this).attr("href"); 
        destination = $(elementClick).offset().top;
         $("body,html").animate({scrollTop: destination },
          1500); 
    }); 
});


window.onscroll = function() {
    let scrollElem = document.getElementById("scrollToTop");
    if (window.pageYOffset > document.documentElement.clientHeight) {
       scrollElem.style.opacity = "1";
       scrollElem.style.cursor = "pointer";
    } else {
       scrollElem.style.opacity = "0";
       scrollElem.style.cursor = "default";
    }
 }

let timeOut;
function goUp() {
   let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 100) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}