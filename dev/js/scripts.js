import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);

gsap.set("#card",{ scale: .7, transformOrigin:"center"});
gsap.set(".window",{ opacity: 0, transformOrigin:"center"});


const mainTL = gsap.timeline()

function window1(){
    const tl=gsap.timeline();
    tl.to(".window",{ opacity: 1, duration: 2});
    return tl;
}

mainTL.add(window1())

GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();