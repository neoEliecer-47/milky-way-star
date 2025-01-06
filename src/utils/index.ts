import { spaceLayerProps } from "../types";

export function generateSpaceLayer({
  size,
  selector,
  starsLength,
  duration,
}: spaceLayerProps) {
  const layer = [];

  for (let i = 0; i < starsLength; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 white, ${x}vw ${y + 100}vh 0 white`);
  }

  const container = document?.querySelector(selector) as HTMLElement;
  container?.style.setProperty("--space-layer", layer.join(","));
  container?.style.setProperty("--size", size);
}
