import { useSpring } from "framer-motion";
import { RefObject, useEffect } from "react";

const spring = { stiffness: 120, damping: 18 };

export function useFollowInside(ref: RefObject<HTMLElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      const padding = 32;
      const cx = Math.max(padding, Math.min(mx, rect.width - padding));
      const cy = Math.max(padding, Math.min(my, rect.height - padding));

      x.set(cx);
      y.set(cy);
    };

    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  return { x, y };
}
