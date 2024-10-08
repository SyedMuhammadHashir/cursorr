const circle = document.querySelector(".circle");
const frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

frames.forEach(frame => {
    frame.addEventListener("mousemove",(dets)=>{
    
        let xStart = frame.getBoundingClientRect().x
        let xEnd = frame.getBoundingClientRect().width + xStart
        console.log(xStart)
        console.log(xEnd)
    
        let zeroOne = gsap.utils.mapRange(xStart, xEnd, 0, 1, dets.clientX)
        
        console.log(zeroOne)
    
       
    
        gsap.to(circle,{
            scale: 12
        })
    
        gsap.to(frame.children,{
            color: "#000",
            duration: .4,
            y: "-5vw"
        })
    
        gsap.to(frame.children,{
            x: lerp(-50, 50, zeroOne),
            duration: .4
        })
    }); 
    
    frame.addEventListener("mouseleave",(dets)=>{
        gsap.to(circle,{
            scale: 1,
            duration: 0.5
        })
    
        gsap.to(frame.children,{
            color: "#fff",
            duration: .4,
            y: "0vw"
        })
    
        gsap.to(frame.children,{
            x: 0,
            duration: .4
        })
    }); 
});

window.addEventListener("mousemove",(dets)=>{
    gsap.to(circle,{
        x: dets.clientX,
        y: dets.clientY,
        duration: 1,
        ease: "expo"
    })
});




