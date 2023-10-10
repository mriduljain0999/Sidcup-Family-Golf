var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+30 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x -250 + "px";
    blur.style.top = dets.y -250+ "px";
})
gsap.to("#nav",{
    backgroundColor: "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        start:"top -10%",
        end:"top -11%",
        scroller:"body",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    })
})
gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
var x = document.querySelectorAll("#cards-container div");
x.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    })
})
gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})
const elem = document.querySelectorAll('.elem');
const bla = document.getElementById('bla');

bla.style.transition = 'all 0.5s ease';
elem.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        bla.style.webkitTextStroke = '1.5px #95c11e';
    });

    element.addEventListener('mouseleave', () => {
        bla.style.webkitTextStroke = ''; // Reset to the default style
    });
});
gsap.from("#page4 h1",{
    y:60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 100%",
        end:"top 90%",
        scrub:1
    }
})
var arrow = document.querySelector("#page1 #arrow");

arrow.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(3)";
    crsr.style.border = "0.1px solid white";
    crsr.style.backgroundColor = "transparent";
    
});

arrow.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1)";
    crsr.style.border = "0.1px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e"
});

var f1 = document.querySelector("#f1 img");

f1.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(3)";
    crsr.style.border = "0.1px solid white";
    crsr.style.backgroundColor = "transparent";
    
});

f1.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1)";
    crsr.style.border = "0.1px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e"
});
var f2 = document.querySelectorAll("#f2 h3");
f2.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    })
})

var f3 = document.querySelectorAll("#f3 h3");
f3.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    })
})
var f4 = document.querySelectorAll("#f4 h3");
f4.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    })
})
