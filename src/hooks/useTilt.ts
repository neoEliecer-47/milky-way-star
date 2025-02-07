import { useEffect, useRef } from "react";

export function useTilt(active: boolean): React.RefObject<HTMLDivElement> {
  // <--- returning a ref object
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state: {
      rect?: DOMRect;
      mouseX?: number;
      mouseY?: number;
    } = {};

    let el = ref.current;

    const handleMouseMove = (e: MouseEvent): void => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px.toString());
      el.style.setProperty("--py", py.toString());
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}
