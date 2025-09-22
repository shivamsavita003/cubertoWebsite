gsap.registerPlugin(ScrollTrigger);
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos: ["video7.mp4","video9.mp4","video4.mp4"]});

gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger:"#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease:"power1"
});

let sections = document.querySelectorAll(".fleftelm");

Shery.imageEffect(".images", {
    style: 5,
    config:{onMouse: {value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub:1,
                onUpdate: function (prog) {
                    setScroll(prog.progress+index)
                },
            });
        });
    },
});