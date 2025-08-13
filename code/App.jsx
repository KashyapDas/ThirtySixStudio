import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Canvas from './components/Canvas';
import imageData from './components/imageData';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {

  const scrollRef = useRef(null);
  const [colorChange, setColorChange] = useState(0);
  const cursorRef = useRef(null); 
  const frameVisible = useRef(null);
  const [check, setCheck] = useState(false);

  const changeTheme = ()=>{
    if(colorChange ===0)
    {
      setColorChange(1);
    }
    else if(colorChange ===1)
    {
      setColorChange(0);
    }
  }

  useGSAP(()=>{
      if(colorChange === 0)
      {
        if(frameVisible.current)
        {
          gsap.to(frameVisible.current,{
            scale : 0,
            duration : 1,
            opacity : 0,
            ease : "linear",
            onComplete : ()=>{
              setCheck(false);
            }
          })  
        }
        gsap.to(scrollRef.current,{
          backgroundColor : "white",
          color : "black",
          ease : "linear",
          duration : 1,
          onStart : ()=>{
            gsap.to(".horizantal",{
              backgroundColor : "black",
              duration : 1,
              ease : "linear"
            })
          }
        })
      }
      else if(colorChange === 1)
      {
        if(frameVisible.current)
        {
          gsap.to(frameVisible.current,{
            scale : 0,
            duration : 1,
            opacity : 0,
            ease : "linear",
            onComplete : ()=>{
              setCheck(false);
            }
          })  
        }
        gsap.to(scrollRef.current,{
          backgroundColor : "black",
          color : "white",
          ease : "linear",
          duration : 1,
          onStart : ()=>{
            gsap.to(".horizantal",{
              backgroundColor : "white",
              duration : 1,
              ease : "linear"
            })
          }
        })
      }
    },[colorChange]);

  useEffect(() => {
    const scrollEl = scrollRef.current;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.03,
      multiplier: 1.8,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    // ScrollTrigger Proxy
    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed"
    });

    // Trigger update on scroll
    const updateScroll = () => scroll.update();
    scroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", updateScroll);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", updateScroll);
      scroll.destroy();
    };
  }, []);
  // Mouse Follower
  const cursorFollower = (e) => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            opacity : 1,
            duration: 0.8,
            ease: [0.65, 0, 0.35, 1]
        });
  };
  // Theme Changer
  const scaleCursorEnter = ()=>{
    gsap.to(cursorRef.current,{
      scale : 2,
      duration : 0.5,
      ease: [0.65, 0, 0.35, 1]
    })
  }
  const scaleCursorLeave = ()=>{
    gsap.to(cursorRef.current,{
      scale : 1,
      duration : 0.5,
      ease: [0.65, 0, 0.35, 1]
    })
  }
  // Frame Visible
  const frameVisibleAnimation = (e)=>
  {
    gsap.to(frameVisible.current,{
      opacity : 100,
      scale : 100,
      duration : 1.2,
      ease : "linear",
      onComplete : ()=>{
        setCheck(true);
      }
    })
  }

  return (
    <div onMouseMove={cursorFollower} ref={scrollRef} data-scroll-container className={`bg-white text-black w-full min-h-full relative overflow-hidden`}>

      <div ref={cursorRef} className="w-[40px] h-[40px] z-[100] absolute top-0 left-0 opacity-0 rounded-full mix-blend-difference bg-white pointer-events-none hidden md:inline-block">
      </div>
      
      <div ref={frameVisible} className='bg-red-500 w-[100px] h-[100px] rounded-full fixed top-0 left-0 opacity-0 pointer-events-none'></div>

      {imageData.map((items, index) => (
        <div key={index} data-scroll-section className='w-full h-screen'>
          {items.map((item, i) => (
            <Canvas key={i} imageDetails={item} check={check} />
          ))}
          {index === 0 && <Page1 changeTheme={changeTheme} scaleCursorEnter={scaleCursorEnter} scaleCursorLeave={scaleCursorLeave} frameVisibleAnimation={frameVisibleAnimation} />}
          {index === 1 && <Page2 />}
          {index === 2 && <Page3 />}
        </div>
      ))}
    </div>
  );
}
export default App;


