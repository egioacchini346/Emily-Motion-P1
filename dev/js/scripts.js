import {gsap} from "gsap";

const mainTL = gsap.timeline()

// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing do you want to annimate? | Duration of the animation? | What do we want to do?
//const heroHeight = document.querySelector("#heroimg");

//Const maniTime = 0.5;

mainTL.from("#hero", {duration:2, alpha:0,x:1000})
    .from("#h1", {duration:1, y:"+= 300", alpha:0, rotation:180},"madeUp")
    .from("#h2", {duration:3, y:"+= 300 ", alpha:0, rotation:180},"madeUp")
    .from("#logo", {duration:3, y:"+=300", alpha:0, rotation:180}, "madeUp")
    .from("#pin", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#b1", {duration:3, y:"+=300", alpha:0}, "madeUp")
    .from("#b2", {duration:3, y:"+=300", alpha:0}, "madeUp")
    .from("#b3", {duration:3, y:"+=300", alpha:0}, "madeUp")
    .from("#b4", {duration:3, y:"+=300", alpha:0}, "madeUp")
    .from("#s1", {duration:3, y:"+=300", alpha:0}, "madeUp")
    .from("#s2", {duration:3, y:"+=300", alpha:0}, "madeUp")
    .from("#s3", {duration:3, y:"+=300", alpha:0}, "madeUp")
    .from("#s4", {duration:3, y:"+=300", alpha:0}, "madeUp")
    .from("#s5", {duration:3, y:"+=300", alpha:0}, "madeUp")
    .from("#s6", {duration:3, y:"+=300", alpha:0}, "madeUp");
