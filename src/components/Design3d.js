import React from "react";
import { Box, Card, styled, Typography } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { StlViewer } from "react-stl-viewer";

const CardContain = styled(motion.div)({
  height: "600px",
  width: "600px",

  boxShadow: "0px 0px 16px rgba(128, 152, 74, 0.18)",
  background: "rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;",
  borderRadius: "14px",
});

const BorderBox = styled(motion.div)({
  position: "absolute",
  zIndex: "0",
  left: "60px",
  top: "50px",
});

const DiceBox = styled(motion.div)({
  position: "relative",
  zIndex: "1",
  top: "180px",
  left: "90px",
});

function Design() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <Box
      sx={{
        margin: " 100px auto",
        maxWidth: "500px",
        maxHeight: "600px",
      }}
    >
      <CardContain
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <BorderBox>
          <img src="/images/border.png" height="500px" alt="border" />
        </BorderBox>
        <DiceBox
          style={{ x, y, rotateX, rotateY, z: 10000 }}
          drag
          dragElastic={0.12}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <StlViewer
            style={{ height: "600px", width: "600px" }}
            url="/images/a.stl"
          />
        </DiceBox>
      </CardContain>
    </Box>
  );
}

export default Design;
