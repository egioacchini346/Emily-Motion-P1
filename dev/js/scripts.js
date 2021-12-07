import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);

gsap.set("#animation",{ scale: .5, opacity: 0, transformOrigin:"center"});

const mainTL = gsap.timeline()


function animation(){
    const tl=gsap.timeline();
    tl.to(".ellipse",{duration: .3, opacity: 1})
  
    return tl; 
}


    
mainTL.add(animation())
    

    
GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();