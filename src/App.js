import { Box, Card, styled, Typography } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { StlViewer } from "react-stl-viewer";
import Parallel from "./components/Parallel";
import Svg from "./components/Svg";
import TextColor from "./components/TextColor";

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {/* <Svg /> */}
        {/* <TextColor /> */}
        <Parallel />
      </AnimatePresence>
    </>
  );
}

export default App;
