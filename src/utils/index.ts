import { spaceLayerProps } from "../types";

const COLORS = ['#fff2', '#fff4', '#fff7', '#fffc']

export function generateSpaceLayer({
  size,
  
  starsLength,
  duration,
  divRef
}: spaceLayerProps): void {
  const layer = [];

  for (let i = 0; i < starsLength; i++) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x + 100}vw ${y}vh 0 ${color}`);
  }

  if(divRef?.current){
    divRef.current.style.setProperty("--space-layer", layer.join(","), "important")
    divRef.current.style.setProperty("--size", size, "important")
    divRef.current.style.setProperty("--duration", duration)
  }
 
}
