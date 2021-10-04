import {
    gsap
} from "gsap";

const mainTL = gsap.timeline();
// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing do you want to annimate? | Duration of the animation? | What do we want to do?

mainTL.from("#hero h1", {duration: 2,alpha: 0,scale:2});

