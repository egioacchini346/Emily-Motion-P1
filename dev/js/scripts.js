import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

gsap.set("#card",{ scale: .7, transformOrigin:"center"});
gsap.set(".colleges",{ opacity: 0, transformOrigin:"center"});
//gsap.set("#Frame-14",{ opacity:0, transformOrigin:"center"});


const mainTL = gsap.timeline()

function windowscene(){
    const tl=gsap.timeline();
    
    
    return tl;
}
function cabinscene(){
    const tl=gsap.timeline();

    tl.to("#animation",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#architectstudies",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#architecture",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#history",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#museum",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#dance",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#designresearch",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#designmerch",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#digital",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#entertainment",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#fashion",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#film",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#game",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#graphic",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#interiord",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#interiora",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#interiorad",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#music",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#photography",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#product",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#retail",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#screenwriting",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#television",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#virtualreality",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#userexperience",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#urbanstrategy",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    return tl;
}
mainTL.add(windowscene())
mainTL.add(cabinscene())

GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();