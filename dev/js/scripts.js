import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);

const mainTL = gsap.timeline()

// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing do you want to annimate? | Duration of the animation? | What do we want to do?
//const heroHeight = document.querySelector("#heroimg");

//Const mainTime = 0.5;

//shark
//controller



.from("#white-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from("#big-left-gray-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from("#small-left-gray-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from("#small-right-gray-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from("#blue-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from("#yellow-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from("#red-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from("#green-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from("#big-bottom-right-gray-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from(".plusbuttonbottom", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from(".plusbuttontop", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}}) //need to get the PLUS TO SPIN
.from("#controller-color", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
.from("#controller-shadow", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
//.addPause("#controller-shadow+=0") ADD PAUSE 



.from("#controller-shadow", {duration: .20 , scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from("#controller-color", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from(".plusbuttontop", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from(".plusbuttonbottom", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from("#big-bottom-right-gray-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from("#green-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from("#yellow-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from("#blue-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from("#small-right-gray-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from("#small-left-gray-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from("#big-left-gray-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
.from("#white-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
//RED BUTTON SCALES BIGGER AND MOVES TOWARDS MIDDLE/CENTER/GLOW
//saber
//wand

//sun animation

//.from("#yellow-circle", { opacity:0})
//.to("#yellow-circle", { opacity:1, duration: .5})
//.from("#sun-stroke-outline", { opacity:0})
//.to("#sun-stroke-outline", { opacity:1, duration: .5})
//.from(".ray", { opacity:0, stagger: .25})
//.to(".ray", { opacity:1, duration: .30})

//rays falling off sun circle

//.to("#yellow-circle", { opacity:0, duration: .5})
//.to("#sun-stroke-outline", { duration:.5, scale: 1, strokeWidth:15})


//hunger games animation
    //arrow has to fly

//.from("#bird", { opacity:0})
//.to("#bird", { opacity:1, duration: .70})
   




mainTL.from("#hero", {duration:2, alpha:0})
    .from("#logo", {rotationX: 360,rotationY: 0, rotationZ:0})
    .from("#li1", {duration:.75, alpha:0})
    .from("#li2", {duration:.75, alpha:0})
    .from("#li3", {duration:.75, alpha:0})
    .from("#h1", {duration:.5, y:"+= 300", alpha:0, rotation:180},"madeUp")
    .from("#h2", {duration:.5, y:"+= 300", alpha:0, rotation:180},"madeUp")
    .from("#pin", {duration:.75, y:"+=300", alpha:0, rotation:180}, "madeUp")
    .from("#pin", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#h3", {duration:.75, alpha:0,y:1000})
    .from("#p", {duration:.75, alpha:0,y:1000})
    .from("#b1", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#b2", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#b3", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#b4", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#s1", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s2", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s3", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s4", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s5", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s6", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#icon1, #n1", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon2, #n2", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon3, #n3", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon4, #n4", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon5, #n5", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    .from("#icon6, #n6", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'});
  

GSDevTools.create();