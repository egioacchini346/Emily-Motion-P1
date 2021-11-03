import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);

const mainTL = gsap.timeline()

// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing do you want to annimate? | Duration of the animation? | What do we want to do?
//const heroHeight = document.querySelector("#heroimg");

//Const mainTime = 0.5;

function shark(){
    const tl=gsap.timeline();
    tl.from ("shark", {duration: 1});
    return tl;
}

function controller(){
    const tl=gsap.timeline();
    tl.from("#white-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#big-left-gray-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#small-left-gray-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#small-right-gray-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#blue-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#yellow-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#red-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#green-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#big-bottom-right-gray-button", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from(".plusbuttonbottom", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from(".plusbuttontop", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}}) 
    
    //need to get the PLUS TO SPIN
    //.from("#plus-button_2", {rotation:"560", axis: "y"}, "start")
    //.from("#plus-button-shadow", {rotation:"560", axis: "y"}, "start")
    tl.from("#controller-color", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#controller-shadow", {duration: .20, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})

    
    tl.from("#controller-shadow", {duration: .20 , scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"+=3")
    tl.from("#controller-color", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    tl.from(".plusbuttontop", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    tl.from(".plusbuttonbottom", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    tl.from("#big-bottom-right-gray-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    tl.from("#green-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    tl.to("#red-button", { duration: 2,  ease: "none", x: -175},"same")
    //red button needs to go at same time as other buttons, glow too
    tl.from("#yellow-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"same")
    tl.from("#blue-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"same")
    tl.from("#small-right-gray-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    tl.from("#small-left-gray-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    tl.from("#big-left-gray-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    tl.from("#white-button", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    return tl;
}


//saber
function alternativelightsaber(){
    const tl=gsap.timeline();
    tl.from("#light-saber-bottom-part-1", {rotation: 450, scale: 2, y: 67, x: 230})
    tl.from("#light-saber-bottom-part-2", {rotation: 450, scale: 2, y: 48, x: 145})
    tl.from("#light-saber-bottom-part-3", {rotation: -270, scale: 2, y: 0, x: 49})
    tl.from("#light-saber-bottom-part-4", {rotation: -270, scale: 2, y: -35, x: 0})
    tl.to("#light-saber-bottom-part-1", {x:500})
    tl.to("#light-saber-bottom-part-2", {x:-500})
    tl.to("#light-saber-bottom-part-3", {x:500})
    tl.to("#light-saber-bottom-part-4", {x:-500})
    return tl;
}

function lightsaber(){
}


//wand
function wand(){
}

//sun animation
function sun(){
    const tl=gsap.timeline();
    tl.from("#yellow-circle", { opacity:0})
    tl.to("#yellow-circle", { opacity:1, duration: .5})
    tl.from("#sun-stroke-outline", { opacity:0})
    tl.to("#sun-stroke-outline", { opacity:1, duration: .5})
    tl.from(".ray", { opacity:0, stagger: .25})
    tl.to(".ray", { opacity:1, duration: .30})
    //tl.to("#yellow-ray-1", { duration: 2.5, x:90, y:-30 })
    //rays falling off sun circle
    tl.to("#yellow-circle", { opacity:0, duration: .5})
    tl.to("#sun-stroke-outline", { duration:.5, scale: 1, strokeWidth:15})
    return tl;
}

//hunger games animation
    //arrow has to fly

    function arrow(){
    }


    function bird(){
        const tl=gsap.timeline();
        tl.from("#bird", { opacity:0})
        tl.to("#bird", { opacity:1, duration: .70})
        return tl;
    }
   




///mainTL.from("#hero", {duration:2, alpha:0})
 //   .from("#logo", {rotationX: 360,rotationY: 0, rotationZ:0})
  //  .from("#li1", {duration:.75, alpha:0})
  //  .from("#li2", {duration:.75, alpha:0})
   // .from("#li3", {duration:.75, alpha:0})
   // .from("#h1", {duration:.5, y:"+= 300", alpha:0, rotation:180},"madeUp")
   // .from("#h2", {duration:.5, y:"+= 300", alpha:0, rotation:180},"madeUp")
   // .from("#pin", {duration:.75, y:"+=300", alpha:0, rotation:180}, "madeUp")
  //  .from("#pin", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
   // .from("#h3", {duration:.75, alpha:0,y:1000})
  //  .from("#p", {duration:.75, alpha:0,y:1000})
   // .from("#b1", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
  //  .from("#b2", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
   // .from("#b3", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
  //  .from("#b4", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
  //  .from("#s1", {duration:.75, y:"+=300", alpha:0}, "madeUp")
  //  .from("#s2", {duration:.75, y:"+=300", alpha:0}, "madeUp")
  //  .from("#s3", {duration:.75, y:"+=300", alpha:0}, "madeUp")
  //  .from("#s4", {duration:.75, y:"+=300", alpha:0}, "madeUp")
  //  .from("#s5", {duration:.75, y:"+=300", alpha:0}, "madeUp")
   // .from("#s6", {duration:.75, y:"+=300", alpha:0}, "madeUp")
  //  .from("#icon1, #n1", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
   // .from("#icon2, #n2", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
   //.from("#icon3, #n3", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
   // .from("#icon4, #n4", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
   // .from("#icon5, #n5", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'})
    //.from("#icon6, #n6", {duration: .5, x: 3, scale: 1.5,ease: 'bounce'});
  
    
    
    mainTL.add(shark())
    mainTL.add(controller())
    mainTL.add(alternativelightsaber())
    mainTL.add(lightsaber())
    mainTL.add(wand())
    mainTL.add(sun())
    mainTL.add(arrow())
    mainTL.add(bird())
    
    
GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();