import {
    gsap
} from "gsap";

const mainTL = gsap.timeline();
// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing do you want to annimate? | Duration of the animation? | What do we want to do?

mainTL.from("#hero", {
    duration: 2,
    alpha: 0,
    sacle: 2
});


gsap.set(".quickflip", {
    transformStyle: "preserve-3d",
    transformPerspective: 1000
});
gsap.set(".qf-card", {
    transformStyle: "preserve-3d",
    transformOrigin: "50% 50%",
});
gsap.set(".qf-back", {
    rotationX: 180
});

const timing = 1;

const tl = gsap.timeline({
    paused: true
});
tl.to(".qf-card", {
    rotationY: "+=180",
    duration: timing
});
tl.to(".quickflip", {
    z: 50,
    duration: timing / 2,
    yoyo: true,
    repeat: 1
}, 0);

gsap.utils.toArray(".quickflip").forEach(flip => {
    flip.addEventListener("mouseenter", event => tl.play("logo"));
    flip.addEventListener("mouseleave", event => tl.reverse("logo"));
});