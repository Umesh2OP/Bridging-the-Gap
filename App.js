let tl=gsap.timeline()
tl.from( "#nav a ",{
    y:-100,
    duration:0.4,
    delay:8,
    stagger:1
})
gsap.to("#nav",{
  backgroundColor :"#000",
  height:"120px",
  duration:1.5,
  delay:12,
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:3

  }
  

}
) 
gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -25%",
    end:"top -70%",
    scrub:2
  }

})
const aboutUsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-us",
    start: "top 80%", // Trigger when the top of #about-us is 80% down the viewport
    end: "bottom 60%", // End trigger position
    toggleActions: "play none none none", // Play the animation only once
  },
});

// Add animations to the timeline
aboutUsTimeline
  .from("#about-us img", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.7)", // Elastic ease for a pop effect
  })
  .from(
    "#about-us-content h3",
    {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out", // Smooth ease
    },
    "-=0.4" // Overlap with the previous animation
  )
  .from(
    "#about-us-content p",
    {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4" // Overlap with the previous animation
  );
  



window.onload = function() {
    
    setTimeout(function() {
      document.querySelector('.loader').style.display = 'none'; // Hide the loader
      document.querySelector('.main-content').style.display = 'block'; // Show the main content
    }, 7000); 
  };
  
