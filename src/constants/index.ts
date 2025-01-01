import mercuryImg from "../assets/planets/mercury.png";
import venusImg from "../assets/planets/venus.png";
import earthImg from "../assets/planets/earth-image.png";
import marsImg from "../assets/planets/mars.png";
import jupiterImg from "../assets/planets/jupiter.png";
import saturnImg from "../assets/planets/saturn.png";
import uranusImg from "../assets/planets/uranus.png";
import neptuneImg from "../assets/planets/neptune.png";
import { planetsProps } from "../types";

export const planets: planetsProps[] = [
  { imgSrc: mercuryImg, id: 1 },
  { imgSrc: venusImg, id: 2 },
  { imgSrc: earthImg, id: 3 },
  { imgSrc: marsImg, id: 4 },
  { imgSrc: jupiterImg, id: 5 },
  { imgSrc: saturnImg, id: 6 },
  { imgSrc: uranusImg, id: 7 },
  { imgSrc: neptuneImg, id: 8 },
];
