
import gsap from "gsap"
function HorizontalScroll(containerRef,
      textRef)
{

      const c_w = containerRef.current.offsetWidth
      const t_w = textRef.current.offsetWidth

      gsap.to(textRef.current, {
            x: -1 * (t_w),
            duration: 10,
            repeat: -1,
            ease: "none"
      })



}