import { spaceLayerProps } from "../types";

export function generateSpaceLayer({
  size,
  selector,
  starsLength,
  duration,
  divRef
}: spaceLayerProps): void {
  const layer = [];

  for (let i = 0; i < starsLength; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 white, ${x}vw ${y + 100}vh 0 white`);
  }

  if(divRef?.current){
    divRef?.current.style.setProperty("--space-layer", layer.join(","), "important")
    divRef?.current.style.setProperty("--size", size, "important")
  }


    // container?.style.setProperty("--space-layer", layer.join(","), "important");
    // container?.style.setProperty("--size", size, "important");
 
}
