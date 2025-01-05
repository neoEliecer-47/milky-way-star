import mercuryImg from "../assets/planets/mercury.png";
import venusImg from "../assets/planets/venus.png";
import earthImg from "../assets/planets/earth-image.png";
import marsImg from "../assets/planets/mars.png";
import jupiterImg from "../assets/planets/jupiter.png";
import saturnImg from "../assets/planets/saturn.png";
import uranusImg from "../assets/planets/uranus.png";
import neptuneImg from "../assets/planets/neptune.png";
import sunImg from "../assets/planets/sun.png";

import moonEarth from '../assets/moon/earth-moon.png'
import phobosMarsImg from '../assets/moon/phobos-mars-moon-1.png'
import titanSaturnImg from "../assets/moon/SaturnMoonTitan.png";
import mimasSturnMoon from '../assets/moon/mimas-saturn-moon.png'
import enceladusStaurnImg from "../assets/moon/enceladus-saturn.png";
import europaJupiterImg from "../assets/moon/europa-jupiter.png";
import callistoJupiterImg from "../assets/moon/callisto-jupiter.png";
import ganymedeJupiterMoon from '../assets/moon/ganymede-moon-jupiter.png'
import ioJupiterImg from "../assets/moon/io-jupiter.png";
import titaniaUranusMoon from '../assets/moon/titania-uranus-moon.png'
import umbrielUranusMoon from '../assets/moon/umbriel-uranus-moon.png'
import tritonNeptuneMoon from '../assets/moon/triton-neptune-moon.png'
import hippocampNeptuneMoon from '../assets/moon/hippocamp-neptune-moon.png'


import { planetsProps } from "../types";

export const planets: planetsProps[] = [
  { imgSrc: sunImg, id: 0 },
  { imgSrc: mercuryImg, id: 1 }, //should there be anothe array for moons of every planet?
  { imgSrc: venusImg, id: 2 },
  { imgSrc: earthImg, id: 3, moons: [{ imgSrc: moonEarth, id: 0 }], moonsAnimationDuration: 15, },
  { imgSrc: marsImg, id: 4, moons: [{ imgSrc: phobosMarsImg, id: 0 }], moonsAnimationDuration: 2, },
  {
    imgSrc: jupiterImg,
    id: 5,
    moons: [
      { imgSrc: europaJupiterImg, id: 0 },
      { imgSrc: callistoJupiterImg, id: 1 },
      { imgSrc: ioJupiterImg, id: 2 },
      { imgSrc: ganymedeJupiterMoon, id: 3 }
    ],
    moonsAnimationDuration: 5,
  },
  {
    imgSrc: saturnImg,
    id: 6,
    moons: [
      { imgSrc: titanSaturnImg, id: 0 },
      { imgSrc: enceladusStaurnImg, id: 1 },
      { imgSrc: mimasSturnMoon, id: 2 }
    ],
    moonsAnimationDuration: 12,
  },
  { imgSrc: uranusImg, id: 7, moons: [{ imgSrc:titaniaUranusMoon, id:0 }, { imgSrc: umbrielUranusMoon, id: 1 }], moonsAnimationDuration: 3 },
  { imgSrc: neptuneImg, id: 8, moons: [{ imgSrc: tritonNeptuneMoon, id: 1 }, { imgSrc: hippocampNeptuneMoon, id: 2 }], moonsAnimationDuration: 8 },
];
