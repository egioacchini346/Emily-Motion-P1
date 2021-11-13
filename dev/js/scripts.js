import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);
gsap.set(".preloader-animation",{y: -200, scale: .70, transformOrigin:"center"});
gsap.set("#plus-button-2",{transformOrigin:"center"});
gsap.set("#plus-button-shadow",{transformOrigin:"center"});
gsap.set("#alternativelightsaber", {y: -245, scale: 2, transformOrigin:"center"});
gsap.set(".light-saber", {y: 35, transformOrigin:"center"});
gsap.set("#yellow-circle", {opacity: 0});
gsap.set("#sun-ray-path", {scale: .70, y: -210, x: 10, rotate: -3,transformOrigin:"center"});
gsap.set("#arrow", {x: 250, y: 130, opacity: 0, scale: 0, transformOrigin: "center"});
gsap.set("#arrow-path", {x: 380, y: 140});


const mainTL = gsap.timeline()

// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing do you want to annimate? | Duration of the animation? | What do we want to do?
//const heroHeight = document.querySelector("#heroimg");

//Const mainTime = 0.5;

function controller(){
    const tl=gsap.timeline();
    tl.from("#white-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#big-left-gray-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#small-left-gray-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#small-right-gray-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#blue-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#yellow-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#red-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#green-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#big-bottom-right-gray-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#circle-plus-button-shadow", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}},"same")
    .from("#circle-plus-button", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}},"same") 
    .from(".plus-button-spin", {duration:.15, opacity: 0, rotation: 360, stagger: {from: "edges", axis: "y"}})
    .to(".plus-button-spin", {duration:.15, rotation: 360, stagger: {from: "edges", axis: "y"}})
    .from("#controller-color", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .from("#controller-shadow", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
//controller disappearing
    .from(".controller-bottom", {duration: .20, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"+=.50")
    .to("#circle-plus-button-shadow", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}}, "sameTime")
    .to("#circle-plus-button", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}}, "sameTime")
    .to(".plus-button-spin", {duration:.15, opacity: 0, scale: 0, rotation: -360, stagger: {from: "edges", axis: "y"}})
    .to("#big-bottom-right-gray-button", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    .to("#green-button", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}})
    
    //red button & others disappear
    .to("#red-button", { duration: 1,  ease: "none", stagger: {from: "edges", axis: "y"}, x: -175})
    .to("#yellow-button", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"-=1")
    .to("#blue-button", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"-=0.8")
    .to("#small-right-gray-button", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"-=0.6")
    .to("#small-left-gray-button", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"-=0.4")
    .to("#big-left-gray-button", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"-=0.2")
    .to("#white-button", {duration: .15, scale: 0, ease: "power1.Out", stagger: {from: "edges", axis: "y"}},"-=0.0")
   
    return tl;
}

function alternativelightsaber(){
    const tl=gsap.timeline();
    tl.from("#light-saber-bottom-part-2", {x:1040, stagger: .10}, "same-time")
    .from("#light-saber-bottom-part-3", {x:-1040, stagger: .10},"same-time")
    .from("#light-saber-bottom-part-1", {x:1040, stagger: .10},"same-time-2")
    .from("#light-saber-bottom-part-4", {x:-1040, stagger: .10},"same-time-2")
    .to("#red-button", { duration:.10, opacity: 0}) 
    return tl;
}

function alternativelightsaberrotatingvertically(){
    const tl=gsap.timeline();
    tl.to("#alternativelightsaber", {rotation: -90, scale: .70, y:-72.90, x:-1})
    .from("#lightsaberbottombreakableparts", { opacity:0})
    .to("#lightsaberbottombreakableparts", { opacity:1, duration: .10})
    .to("#alternativelightsaber", {opacity: 0},"-=.38")
   
    return tl;
}

function lightsaber(){
    const tl=gsap.timeline();
    tl.from(".light-saber", {opacity:0})
    .to(".light-saber", { opacity:1, duration: .5})
    return tl;
}

function lightsaberbottombreakableparts(){
    const tl=gsap.timeline();
    
    tl.to(".light-saber", { opacity:0, duration: .15}, "sametime")
    tl.to("#lightsaberbottompart1", {x:1040, stagger: .10}, "sametime")
    .to("#lightsaberbottompart2", {x:-1040, stagger: .10})
    .to("#lightsaberbottompart3", {x:1040, stagger: .10})
    .to("#lightsaberbottompart4", {x:-1040, stagger: .10})
    tl.from(".wand-wo-glow", { opacity:0}, "sametime")
    //wand
    //tl.to(".wand-wo-glow", { opacity:1, duration: .5}, "sametime")
    //tl.from(".wand-wo-glow", { opacity:0}, "sametime")
    //tl.to(".wand-wo-glow", { opacity:1, duration: .5}, "sametime")
    return tl;
}

//function wand(){
    //const tl=gsap.timeline();
    //tl.to(".wand-wo-glow", { opacity:0})
    //return tl;
//}





function sun(){
    const tl=gsap.timeline();
    tl.from("#yellow-circle-2", { opacity:0})
    .to("#yellow-circle-2", { opacity:1, duration: .3})
    .from("#sun-stroke-outline", { opacity:0})
    .to("#sun-stroke-outline", { opacity:1, duration: .3})
    .from(".ray", { opacity:0, stagger: .10})
    .to(".ray", { opacity:1, stagger: .10})
    .to(".ray", { opacity:0, stagger: .10},"-=2.2")
    //.to("#orange-ray-1", {duration: .10, ease: "power1.Out", motionPath:{path:"#OR1", align:"#OR1", alignOrigin: [0.5, 0.5]}})
    .to("#yellow-circle-2", { opacity:0, stagger: .3})
    .to("#sun-stroke-outline", { duration:.3, scale: 1, strokeWidth:15})
    return tl;


}


function arrow(){
    const tl=gsap.timeline();
    tl.to("#arrow", {duration: 1, ease: "power1.In", opacity: 1, scale: .70, motionPath:{path:"#arrow-path", align:"#arrow-path", alignOrigin: [0.5, 0.5]}})
    return tl;
}

function bird(){
    const tl=gsap.timeline();
    tl.from("#bird", { opacity:0})
    tl.to("#bird", { opacity:1, duration: .20})
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
  
    
    mainTL.add(controller())
    mainTL.add(alternativelightsaber())
    mainTL.add(alternativelightsaberrotatingvertically())
    mainTL.add(lightsaber())
    mainTL.add(lightsaberbottombreakableparts())
    //mainTL.add(wand())
    mainTL.add(sun())
    mainTL.add(arrow())
    mainTL.add(bird())

   
    
    
    
GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();