import mercuryImg from "../assets/planets/mercury.png";
import venusImg from "../assets/planets/venus.png";
import earthImg from "../assets/planets/earth-image.png";
import marsImg from "../assets/planets/mars.png";
import jupiterImg from "../assets/planets/jupiter.png";
import saturnImg from "../assets/planets/saturn.png";
import uranusImg from "../assets/planets/uranus.png";
import neptuneImg from "../assets/planets/neptune.png";
import sunImg from "../assets/planets/sun.png";

import titanSaturnImg from "../assets/moon/SaturnMoonTitan.png";
import enceladusStaurnImg from "../assets/moon/enceladus-saturn.png";
import europaJupiterImg from "../assets/moon/europa-jupiter.png";
import ganymedeJupiterImg from "../assets/moon/ganymede-jupiter.png";
import ioJupiterImg from "../assets/moon/io-jupiter.png";
import { planetsProps } from "../types";

export const planets: planetsProps[] = [
  { imgSrc: sunImg, id: 0 },
  { imgSrc: mercuryImg, id: 1 }, //should there be anothe array for moons of every planet?
  { imgSrc: venusImg, id: 2 },
  { imgSrc: earthImg, id: 3 },
  { imgSrc: marsImg, id: 4 },
  {
    imgSrc: jupiterImg,
    id: 5,
    moons: [
      { imgSrc: europaJupiterImg, id: 0 },
      { imgSrc: ganymedeJupiterImg, id: 1 },
      { imgSrc: ioJupiterImg, id: 2 },
    ],
    moonsAnimationDuration: 5,
  },
  {
    imgSrc: saturnImg,
    id: 6,
    moons: [
      { imgSrc: titanSaturnImg, id: 0 },
      { imgSrc: enceladusStaurnImg, id: 1 },
    ],
    moonsAnimationDuration: 12,
  },
  { imgSrc: uranusImg, id: 7 },
  { imgSrc: neptuneImg, id: 8 },
];
