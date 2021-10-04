import {
    gsap
} from "gsap";

const mainTL = gsap.timeline();
// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing do you want to annimate? | Duration of the animation? | What do we want to do?


const heroHeight = document.querySelector("#hero");
const aniTime = 0.5;

console.log(heroHeight.clientHeight + "px is the height of the hero section");
console.log(heroHeight.clientHeight + "px is the width of the hero section");

mainTL.from("#hero img", {duration:2, alpha:0, y: heroHeight.clientHeight})
    .from("#hero h1", {duration:1, y:"+=380", alpha:0, rotation:180}, "madeUp")
    .from("#hero h2", {duration:3, y:"+=380", alpha:0, rotation:180}, "madeUp")
