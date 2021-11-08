import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);

const mainTL = gsap.timeline()

// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing do you want to annimate? | Duration of the animation? | What do we want to do?
//const heroHeight = document.querySelector("#heroimg");

//Const mainTime = 0.5;


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
  
    

    mainTL.add(sun())
   
    
    
    
GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();