let divs = document.getElementsByClassName('divFAQ');
let FAQS = document.getElementsByClassName('faqs')

let x = 0;


$(".faqs").click(function(){

    divs[x].classList.toggle("none");

    FAQS[x].classList.toggle("checked");
    FAQS[x].classList.toggle("unchecked");

    this.classList.toggle("checked");
    this.classList.toggle("unchecked");
    x=$(".faqs").index(this);
    divs[x].classList.toggle("none");

});

// =====================================================================

let slides = $(".slides");
let Slide = (z)=>{
    $(z).slideToggle(500);
}

slides.hide();
Slide(slides[0]);


$(".trigger").click(function(){


    if (this.classList.contains("off")){
        $(this).css("color","#2a81ea");
        this.classList.toggle("on");
        this.classList.toggle("off");
        this.style.backgroundColor = "#fff";
        this.children[0].innerHTML="<i class=\"fas fa-minus\"></i>";
    }
    else if (this.classList.contains("on")){
        $(this).css("color","#465675 ");
        this.classList.toggle("on");
        this.classList.toggle("off");
        let o = $(".divFAQ h6");
        this.style.backgroundColor = "#f7fafe";
        this.children[0].innerHTML="<i class=\"fas fa-plus\"></i>";
    }
    y=$(".trigger").index(this);
    Slide(slides[y]);
})


$(".menu").toggle();
// ============================NAV==========================
$(".NAVtoggle").click(function(){
    $(".menu").toggle(100);
    $(".NAVtoggle").toggle();
})
$("#Shut").click(function(){
    $(".menu").toggle(100);
    $(".NAVtoggle").toggle();
})
$(".menu a").click(function(){
    $(".menu").toggle(100);
    $(".NAVtoggle").toggle();
})




$(window).scroll(function () {
    if ($(window).scrollTop() >= 68) {
    $('header').css('background','white');
    } else {
    $('header').css('background','transparent');
    }
});


// =======================UP button==========================

$(window).scroll(function(){
    console.log($(window).scrollTop());
    if($(window).scrollTop()>639.2000122070312){
        $(".up").css('display','block');
    }
    else{
        $(".up").css('display','none');    
    }
})

$(function(){
    $.scrollIt();
  });