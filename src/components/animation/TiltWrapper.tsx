import React, { useRef } from "react"
import './TiltWrapper.css'

const TiltWrapper = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null)

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        const element = ref.current;
        if(!element) return;

        const rect = element.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / height) - 0.5) * 20;
        const rotateY = ((x / width) - 0.5) * -20;

        element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    // function handleMouseLeave(){
    //     const element = ref.current;
    //     if(element){
    //         element.style.transform = `rotateX(0deg) rotateY(0deg)`;
    //     }
    // }



  return (
    <div className='tilt-container' ref={ref} onMouseMove={handleMouseMove}>
        {children}
    </div>
  )
}

export default TiltWrapper