import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

gsap.set("#card",{ scale: .7, transformOrigin:"center"});
gsap.set(".window",{ opacity: 0, transformOrigin:"center"});
gsap.set(".house",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Frame-5",{ opacity: 0, transformOrigin:"center"});
gsap.set(".green",{ scale: 8, transformOrigin:"center"});
//gsap.set("#Frame-14",{ opacity:0, transformOrigin:"center"});


const mainTL = gsap.timeline()

function window1(){
    const tl=gsap.timeline();
    tl.to(".window",{ opacity: 1, duration: 2})
    tl.to(".house",{ opacity: 1, duration: .7},"sameTime")
    tl.from("#snow-top-right-window",{ opacity: 0, duration: .7},"sameTime")
    tl.to(".sky-tint",{ opacity: 0, duration: .5})
    tl.to("#Frame-6",{ duration: .5})
    
    return tl;
}
function frame14(){
    const tl=gsap.timeline();

    tl.to("#animation",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#architect-studies",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#history",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#museum",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#dance",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#designresearch",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#designmerch",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#digital",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#entertainment",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#fashion",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#film",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#game",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#graphic",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#interiord",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#interiora",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#interiorad",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#music",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#photography",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#product",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#retail",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#screenwriting",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#television",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#virtualreality",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#userexperience",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#urbanstrategy",{duration: .5, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    return tl;
}
mainTL.add(window1())
mainTL.add(frame14())

GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();