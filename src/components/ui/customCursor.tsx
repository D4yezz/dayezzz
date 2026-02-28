"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode = "default" | "box";

export default function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>("default");
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [variant, setVariant] = useState<"default" | "nav">("default");
  // const [cursorVariant, setCursorVariant] = useState<"default" | "pointer">(
  //   "default"
  // );
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 250);
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      clearTimeout(timeout);
    };
  }, []);
  const variants: Variants = {
    default: {
      x: mouse.x - 14,
      y: mouse.y - 14,
      opacity: hidden ? 0 : isMoving && mode === "default" ? 1 : 0,
      scale: hidden ? 0 : isMoving ? 1 : 0,
      width: 28,
      height: 28,
      transition: {
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 40,
        },
        opacity: { duration: 0.2 },
      },
    },
    nav: {
      x: mouse.x - 14,
      y: mouse.y - 14,
      opacity: hidden ? 0 : isMoving ? 1 : 0,
      scale: hidden ? 0 : isMoving ? 1 : 0,
      mixBlendMode: "difference",
    },
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const box = target.closest(".cursor-box");

      if (box) {
        setMode("box");
        setRect(box.getBoundingClientRect());
      } else {
        setMode("default");
        setRect(null);
      }
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("[data-hide-cursor]")) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.addEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-9999 pointer-events-none rounded-full bg-linear-to-br from-gray-300 to-gray-600"
        initial={{ scale: 0, opacity: 0 }}
        variants={variants}
        animate={variant}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {rect && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-9998 lg:border-2 border-white"
          initial={{ opacity: 0, x: mouse.x, y: mouse.y, width: 0, height: 0 }}
          animate={{
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height,
            opacity: mode === "box" && !hidden ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
        />
      )}
    </>
  );
}
