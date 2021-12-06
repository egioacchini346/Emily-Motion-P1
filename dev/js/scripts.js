import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);


    
GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();