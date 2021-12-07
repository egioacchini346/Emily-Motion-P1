import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

gsap.set("#card",{ scale: .85, transformOrigin:"center"});
gsap.set(".colleges",{ opacity: 0, transformOrigin:"center"});




const mainTL = gsap.timeline()

function windowscene(){
    const tl=gsap.timeline();
    
    
    return tl;
}
function cabinscene(){
    const tl=gsap.timeline();

    tl.to(".colleges",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    return tl;
}

function windowscene2(){
    const tl=gsap.timeline();
    
    return tl;
}

function fireplacescene(){
    const tl=gsap.timeline();
    tl.from("#1", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#2", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#3", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#4", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#5", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#6", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#7", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#8", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#9", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#10", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#11", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#12", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#13", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#14", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#15", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#16", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#17", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#18", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#19", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#20", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#21", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#22", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#23", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#24", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#25", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#26", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#27", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#28", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#29", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#30", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#31", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#32", {duration: .15, scale: .1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    //tl.to(cs, 0.6, {tint: 0x228200, ease: Power4.easeOut})
    return tl;
}



mainTL.add(windowscene())
mainTL.add(cabinscene())
mainTL.add(windowscene2())
mainTL.add(fireplacescene())

GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();