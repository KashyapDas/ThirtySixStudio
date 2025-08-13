import { useRef } from "react"
import "../index.css"
import gsap from "gsap"

function Page3() {

  const cardsData = [
    {
      title : "Agile",
      desc : "We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly."
    },
    {
      title : "Innovative",
      desc : "We use carefully crafted digital processes and new technology to ensure our initiatives run smoothly, allowing our lean and international team to focus on what matters and maximize momentum and opportunity."
    },
    {
      title : "Cultured",
      desc : "We are progressive and community-focused and don’t believe in maintaining the status quo or sticking to outdated ways. Our people reflect today’s realities and stay connected to culture."
    },
  ]

  const hoverRefs = useRef([]);
  const headingRefs = useRef([]);
  const paraRefs = useRef([]);

  const setRefs = (el, index, type) => {
    if (type === "hover") hoverRefs.current[index] = el;
    if (type === "heading") headingRefs.current[index] = el;
    if (type === "para") paraRefs.current[index] = el;
  };

  function handleCardsEnter(index) {
    gsap.to(hoverRefs.current[index], {
      height: "100%",
      duration: 0.2,
      ease: "linear"
    });

    gsap.to([headingRefs.current[index], paraRefs.current[index]], {
      mixBlendMode : "hard-light",
      duration: 0.2,
      ease: "linear"
    });
  }

  function handleCardsLeave(index) {
    gsap.to(hoverRefs.current[index], {
      height: "0%",
      duration: 0.2,
      ease: "linear"
    });

    gsap.to([headingRefs.current[index], paraRefs.current[index]], {
      mixBlendMode : "normal", // or your default color
      duration: 0.2,
      ease: "linear"
    });
  }

  return (
    <div className=' w-full h-full overflow-hidden '>

      <div className="cards w-full h-fit">
          {cardsData.map((item,index)=>{

            return <div onTouchStart={() => handleCardsEnter(index)} onTouchEnd={() => handleCardsLeave(index)} onMouseEnter={() => handleCardsEnter(index)}
            onMouseLeave={() => handleCardsLeave(index)} key={index} className="w-full h-fit flex gap-5 md:gap-0 items-center justify-between mb-16 px-2 md:px-0 md:pl-16 md:pr-24 relative cursor-pointer">

                <div ref={(el) => setRefs(el, index, "hover")} className="w-full md:w-[90%] h-[0%] bg-red-700 absolute z-10 opacity-80"></div>

                <h1 ref={(el) => setRefs(el, index, "heading")} className="satoshi font-bold text-3xl md:text-8xl  w-[40%] selection:bg-red-500 selection:text-yellow-200 z-20">{item.title}</h1>
              
                <h3 ref={(el) => setRefs(el, index, "para")} className="satoshi font-medium text-sm md:text-md w-[50%] md:w-[25%] selection:bg-red-500 selection:text-yellow-200 z-20">{item.desc}</h3>
            </div>

          })} 
      </div>

      <div className="w-full h-fit flex items-center justify-center">
        <h1 className="h-fit w-[90%] md:w-[58%] -mt-8 md:mt-16 satoshi font-medium md:font-semibold text-xs md:text-lg text-center selection:bg-red-500 selection:text-yellow-200">At Thirtysixstudio, we recognize that our industry can perpetuate harm. We believe we have to try and reverse some of these imbalances. That’s why we’ relaunching SS36, our local social sustainability hub. Through SS36, were invest some of our revenue and expertise in to the communities that shape the culture and trends our field so heavily relieson. Our main focus is on bridging gaps for those affected by systemic obstacles related torace, sexuality, wealth and gender identity.</h1>
      </div>

    </div>
  )
}

export default Page3
