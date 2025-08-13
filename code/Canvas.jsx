import { useEffect, useRef } from "react";
import canvasimages from "./canvasimages";
import gsap from "gsap";

// Global image cache
const loadedImages = [];

function preloadImages() {
  if (loadedImages.length) return; // Already loaded
  canvasimages.forEach((src, i) => {
    const img = new Image();
    img.src = src;
    loadedImages[i] = img;
  });
}
preloadImages();

function Canvas({ imageDetails,check }) {
  const { startIndex, sizeW, sizeH, top, left, zIndex } = imageDetails;

  const canvasRef = useRef(null);
  const canvasParentRef = useRef(null);
  const currentImageIndex = useRef(startIndex);
  const isMobile = window.innerWidth < 480;
  const scaleW = isMobile ? sizeH - 2 : sizeW;
  const scaleH = isMobile ? sizeW - 1 : sizeH;
  const lastDrawnIndex = useRef(-1);

  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const img = loadedImages[frameIndex % loadedImages.length];
    if (!img || !img.complete) return;

    // Prevent unnecessary canvas resizing
    if (canvas.width !== img.width || canvas.height !== img.height) {
      canvas.width = img.width;
      canvas.height = img.height;
    }

    // Only redraw if frame changed
    if (lastDrawnIndex.current !== frameIndex) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      lastDrawnIndex.current = frameIndex;
    }
  };

  useEffect(() => {
    const proxy = { frame: startIndex };

    const tween = gsap.to(proxy, {
      frame: startIndex + 149,
      duration: 2.5,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        const rounded = Math.floor(proxy.frame) % canvasimages.length;
        currentImageIndex.current = rounded;
        drawFrame(rounded);
      },
    });

    return () => {
      tween.kill();
    };
  }, [startIndex, isMobile]);

  useEffect(()=>{
    if(check === true)
    {
      gsap.to(canvasRef.current,{
      scale : 1,
      opacity : 100,
      duration : 0.6,
      ease : "linear"
    })
    }
    else{
      gsap.to(canvasRef.current,{
      scale : 0,
      opacity : 0,
      duration : 0.6,
      ease : "linear"
    })
    }
    
  },[check]);

  return (
    <div
      data-scroll
      data-scroll-speed={Math.random().toFixed(4)}
      style={{
        width: `${scaleW}%`,
        height: `${scaleH}%`,
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        // zIndex:  50,
      }}
      className="absolute z-[50] flex items-center justify-center pointer-events-none overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        className="opacity-[0] scale-1"
      />
    </div>
  );
}

export default Canvas;
