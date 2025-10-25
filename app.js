gsap.registerPlugin(ScrollTrigger);
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{images: ["img2.jpg","img4.jpg","img3.jpg"]});

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


// Animate Navbar
gsap.from("#nav", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power4.out"
});

// Animate Main Heading
gsap.from("#homeMain > h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});

// Animate Each Word (Website, Apps, Branding)
gsap.from(".headings h1", {
  opacity: 0,
  y: 100,
  stagger: 0.2,
  delay: 1,
  duration: 1,
  ease: "power3.out"
});


