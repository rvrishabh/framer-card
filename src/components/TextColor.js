import { Box, duration, Typography } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import React, { useLayoutEffect } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function TextColor() {
  useLayoutEffect(() => {
    let text = new SplitType(".box", {
      types: "words, chars",
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom 60%",
        scrub: true,
        markers: true,
      },
    });
    gsap.set(".box", { perspective: 400 });
    let ctx = gsap.context(() => {
      tl.from(text.chars, {
        duration: 1.6,
        // autoAlpha: 0,
        // opacity: 0.1,
        color: "grey",
        // rotationY: 150,
        ease: "power3",

        stagger: 0.01,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Box height="100vh" width="100vw" bgcolor="black">
        <Box className="container" height="500px" pt="400px">
          <Typography fontSize="30px" color="white" className="box">
            jkbdbjkbnc vdsssssssssssssssssss ffffffffffffffffffffffffff
            fffffffffffffffff fffffff fgggggggggg fgggggg jjjjjjjjjj llllllllll
            ,lllllllllllll eeeeeeeeeeeeeee ttttttttttttttttt vvvvvvvvvvvv
            bbbbbbbbbbbb
          </Typography>
        </Box>
      </Box>

      <Box height="100vh" />
    </>
  );
}

export default TextColor;
