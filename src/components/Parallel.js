import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Parallel() {
  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img2",
        start: "top 100%",
        scrub: true,
        markers: true,
      },
    });

    let ctx = gsap.context(() => {
      tl.from(".img2", {
        duration: 1.5,
        y: 600,
        ease: "power3",
      });
      tl.from(".img3", {
        duration: 0.1,
        y: 600,
        ease: "power3",
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Box className="container">
        <img className="img1" src="/images/s.jpg" width="1830px" />
        <img className="img2" src="/images/i.jpg" width="1830px" />
        <img className="img3" src="/images/n.jpg" width="1830px" />
      </Box>
    </>
  );
}

export default Parallel;
