"use client";
import { useEffect } from "react";
import { setScrollInstance } from "@/utils/scrollStore";

const SmoothScroll = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const scroll = new LocomotiveScroll();
        setScrollInstance(scroll);
      }
    )()
  }, [])

  return;
};
export default SmoothScroll;
