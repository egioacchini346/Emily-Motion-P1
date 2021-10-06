import {gsap} from "gsap";

const mainTL = gsap.timeline()

// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing do you want to annimate? | Duration of the animation? | What do we want to do?
//const heroHeight = document.querySelector("#heroimg");

//Const maniTime = 0.5;

mainTL.from("#hero", {duration:2, alpha:0})
    .from("#logo", {rotationX: 360,rotationY: 0, rotationZ:0})
    .from("#li1", {duration:2, alpha:0})
    .from("#li2", {duration:2, alpha:0})
    .from("#li3", {duration:2, alpha:0})
    //.from("#li1", {duration: 1, x: 3, scale: 1.25,ease: 'bounce'})
    //.from("#li2", {duration: 1, x: 3, scale: 1.25,ease: 'bounce'})
    //.from("#li3", {duration: 1, x: 3, scale: 1.25,ease: 'bounce'})
    .from("#h1", {duration:1, y:"+= 300", alpha:0, rotation:180},"madeUp")
    .from("#h2", {duration:2, y:"+= 300", alpha:0, rotation:180},"madeUp")
    .from("#pin", {duration:3, y:"+=300", alpha:0, rotation:180}, "madeUp")
    .from("#pin", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#h3", {duration:2, alpha:0,y:1000})
    .from("#p", {duration:2, alpha:0,y:1000})
    .from("#b1", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#b2", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#b3", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#b4", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#s1", {duration:7, y:"+=300", alpha:0}, "madeUp")
    .from("#s2", {duration:8, y:"+=300", alpha:0}, "madeUp")
    .from("#s3", {duration:9, y:"+=300", alpha:0}, "madeUp")
    .from("#s4", {duration:10, y:"+=300", alpha:0}, "madeUp")
    .from("#s5", {duration:11, y:"+=300", alpha:0}, "madeUp")
    .from("#s6", {duration:12, y:"+=300", alpha:0}, "madeUp")
    .from("#icon1, #n1", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon2, #n2", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon3, #n3", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon4, #n4", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon5, #n5", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon6, #n6", {duration: 1, x: 3, scale: 1.5,ease: 'bounce'});
  
