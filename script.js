function parallax(){
    const lape = document.getElementById("landing-page");
    window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    lape.style.backgroundPositionY = offset * 0.5  + 'px';
});
}
function imagevideochange(){
    const image = document.querySelectorAll(".image");
    image.forEach(function (element) {
        element.addEventListener("mouseenter", function (e) {
            let data = e.target
            data.querySelector(".piccc").style.opacity = 0;
        })
        element.addEventListener("mouseleave", function (e) {
          let data = e.target;
          data.querySelector(".piccc").style.opacity = 1;
        });
    })
}
function gsapanimations(){
    gsap.to("#playreel #video video",{
        scrollTrigger:{
            trigger: "#playreel",
            start: "top 0%",
            pin : true,
            scrub : 1.5,
        },
        height : "100vh"
    });
    gsap.to("#center #left h1",{
        scrollTrigger:{
            trigger: "#playreel",
            start: "top 0%",
            scrub : 1.5,
        },
        left : "40%"
    });
    gsap.to("#center #right h1",{
        scrollTrigger:{
            trigger: "#playreel",
            start: "top 0%",
            scrub : 1.5,
        },
        left : "25%"
    });
    gsap.to("#another-images .move-left",{
        scrollTrigger:{
            trigger: "#moving-objects",
            start: "top center",
            end: "bottom center",
            scrub : 2,
        },
        left: "0%"
    });
    gsap.to("#another-images .move-right",{
        scrollTrigger:{
            trigger: "#moving-objects",
            end: "bottom center",
            start: "top center",
            scrub : 2,
        },
        right: "0%"
    });
    gsap.to("#text-animation #center-container",{
        scrollTrigger:{
            trigger:"#text-animation",
            end: "top 0%",
            scrub : 1,
        },
        top: "20%"
    });
    gsap.to("#nav",{
        scrollTrigger:{
            trigger: "#landing-page #container>p",
            scrub: 1,
            start: "top 30%",
            end: "bottom 30%",
        },
        opacity: 0
    });
    gsap.to("#nav2",{
        scrollTrigger:{
            trigger: "#landing-page #container>p",
            scrub: 1,
            start: "top 30%",
            end: "bottom 30%",
        },
        opacity: 1,
        top: "-2%"
    });
}
function textanimation(){
    document.querySelectorAll(".anime")
    .forEach(function(anime){
        anime.innerHTML = `<div class="wrapper">${anime.textContent}</div>`
    })
    document.querySelectorAll(".wrapper")
    .forEach(wrap =>{
        let clutter = "";
        wrap.textContent.split("").forEach(wrd =>{
            clutter +=`<span>${wrd}</span>`
        })
        wrap.innerHTML = clutter;
    })
    gsap.set(".anime span",{y:"200", opacity: 0})

    document.querySelectorAll(".anime")
        .forEach(function(elem){
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 60%"
                },
                onStart: function(){
                    gsap.to(elem.children[0].children, {
                        y: 0,
                        ease: Power4,
                        duration: .6,
                        stagger: .05,
                        opacity: 1
                    })
                }
            })
        })
}
parallax();
gsapanimations();
textanimation();
imagevideochange();

