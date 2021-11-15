import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);

gsap.set(".preloader-animation",{y: -200, scale: .70, transformOrigin:"center"});
gsap.set("#shark",{ y: -220, transformOrigin:"center"});
gsap.set(".waves",{ y: 120, scale: 2, transformOrigin:"center"});
gsap.set("#first-wave",{ y: 130, transformOrigin:"center"});
gsap.set("#shark-fin",{ y: 10, scale: 2});
gsap.set("#shark-fin-2",{ y: 10, scale: 2, x: 60});
gsap.set("#plus-button-2",{transformOrigin:"center"});
gsap.set("#plus-button-shadow",{transformOrigin:"center"});
gsap.set("#alternativelightsaber", {scale: 2, y: -245, transformOrigin:"center"});
gsap.set(".light-saber", {y: 35, transformOrigin:"center"});
gsap.set("#wand", {scale: 0, opacity: 0, y:-80, transformOrigin:"center"});
gsap.set("#wand-path", {scale:.5, x: 100, y:215, transformOrigin:"center"});
gsap.set("#yellow-circle-2", {opacity: 0});
gsap.set("#arrow", {x: 250, y: 130, opacity: 0, scale: 0, transformOrigin: "center"});
gsap.set("#arrow-path", {x: 380, y: 140});


const mainTL = gsap.timeline()

var firstwave = document.querySelector("#first-wave");
var secondwave = document.querySelector("#second-wave");

var bBoxGroup = firstwave.getBBox();
var bBoxGroup2 = secondwave.getBBox();

function shark(){
    const tl=gsap.timeline();
    tl.from ("#shark", {opacity: 0, duration: 1})
    .to("#first-wave", {duration:.7, x: -bBoxGroup.width / 2, ease: "none", repeat:2}, "start")
    .to("#second-wave", {duration: .5, x: bBoxGroup2.width / 2, ease: "none", repeat:3}, "start")
    .to("#third-wave", {duration: .4, x: -bBoxGroup.width / 2, ease: "none", repeat:1}, "start")
    .to("#fourth-wave",  {duration: .5, x: bBoxGroup2.width / 2, ease: "none", repeat:4}, "start")
    .to("#shark", {duration: 1, opacity: 1}, "start")
    .to("#shark-fin", {duration:.7, x:280}, "start")
    .to("#shark-fin-2", {duration: .5, x:-500},"-=1.3")
    .to("#shark", { scale: .086, y: -430, x: 11.5},"start")
    return tl; 
}

function controller(){
    const tl=gsap.timeline();
    tl.from("#white-button", {duration: .15, opacity: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .to("#white-button", {duration: .15, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    .to("#shark", {opacity: 0, stagger: {from: "edges", axis: "y"}})
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
    tl.from("#light-saber-bottom-part-2", {x:1040, stagger: .10, scale: 2}, "same-time")
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
    .to("#lightsaberbottompart1", {x:1040, stagger: .10}, "sametime")
    .to("#lightsaberbottompart2", {x:-1040, stagger: .10})
    .to("#lightsaberbottompart3", {x:1040, stagger: .10})
    .to("#lightsaberbottompart4", {x:-1040, stagger: .10})
    .from("#wand", { opacity:0, scale:0 }, "sametime")
    .to("#wand", { opacity:1, scale:.2 }, "sametime")
    return tl;
}

function wand(){
    const tl=gsap.timeline();
   
    tl.to("#wand", {scale: .75, rotate: 45, duration: 1, ease: "power2.out", motionPath:{path:"#wand-path", align:"#wand-path", alignOrigin: [0.5, 0.5]}})
    .to("#yellow-circle-2", { opacity:1, duration: .15})
    .to("#yellow-circle-2", { opacity:.5, duration: .15})
    .to("#yellow-circle-2", { opacity:.1, duration: .15})
    .to("#yellow-circle-2", { opacity:.3, duration: .15})
    .to("#yellow-circle-2", { opacity:.7, duration: .15})
    .to("#yellow-circle-2", { opacity:.4, duration: .15})
    .to("#yellow-circle-2", { opacity:.5, duration: .15})
    .to("#yellow-circle-2", { opacity:.1, duration: .15})
    .to("#yellow-circle-2", { opacity:.3, duration: .15})
    .to("#yellow-circle-2", { opacity:.7, duration: .15})
    .to("#yellow-circle-2", { opacity:.4, duration: .15})
    .to("#yellow-circle-2", { opacity:.5, duration: .15})
    .to("#yellow-circle-2", { opacity:.1, duration: .15})
    .to("#yellow-circle-2", { opacity:.3, duration: .15})
    .to("#yellow-circle-2", { opacity:.7, duration: .15})
    .to("#yellow-circle-2", { opacity:.4, duration: .15})
    .to("#yellow-circle-2", { opacity:1}, "sametimesun")
    .to("#wand", {opacity: 0}, "sametimesun")
    return tl;
}


function sun(){
    const tl=gsap.timeline();
    tl.from("#sun-stroke-outline", { opacity:0})
    .to("#sun-stroke-outline", { opacity:1, duration: .3})
    .from(".ray", { opacity:0, stagger: .10})
    .to(".ray", { opacity:1, stagger: .10})
    .to(".ray", { opacity:0, stagger: .10},"-=2.2")
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
    tl.to("#bird", { opacity:1, duration: .20, onComplete: PreloaderDone})
    return tl;
}

function PreloaderDone() {
    window.scrollTo(0,0)
    gsap.set("#preloader", {display:"none"});
}

function heroanimation (){
    const tl=gsap.timeline();
    tl.from("#hero", {duration:2, alpha:0})
    .from("#logo", {rotationX: 360,rotationY: 0, rotationZ:0})
    .from("#li1", {duration:.75, alpha:0})
    .from("#li2", {duration:.75, alpha:0})
    .from("#li3", {duration:.75, alpha:0})
    .from("#h1", {duration:.5, y:"+= 300", alpha:0, rotation:180},"madeUp")
    .from("#h2", {duration:.5, y:"+= 300", alpha:0, rotation:180},"madeUp")
    .from("#pin", {duration:.75, y:"+=300", alpha:0, rotation:180}, "madeUp")
    .from("#pin", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#h3", {duration:.75, alpha:0,y:1000})
    .from("#p", {duration:.75, alpha:0,y:1000})
    .from("#b1", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#b2", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#b3", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#b4", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#s1", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s2", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s3", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s4", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s5", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#s6", {duration:.75, y:"+=300", alpha:0}, "madeUp")
    .from("#icon1, #n1", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#icon2, #n2", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#icon3, #n3", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#icon4, #n4", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#icon5, #n5", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    .from("#icon6, #n6", {duration: .5, x: 3, scale: 1.5,ease: "bounce"})
    return tl; 
}
    
    mainTL.add(shark())
    mainTL.add(controller())
    mainTL.add(alternativelightsaber())
    mainTL.add(alternativelightsaberrotatingvertically())
    mainTL.add(lightsaber())
    mainTL.add(lightsaberbottombreakableparts())
    mainTL.add(wand())
    mainTL.add(sun())
    mainTL.add(arrow())
    mainTL.add(bird())
    mainTL.add(heroanimation())

    
GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();