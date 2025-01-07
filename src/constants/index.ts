import mercuryImg from "../assets/planets/mercury.png";
import venusImg from "../assets/planets/venus.png";
import earthImg from "../assets/planets/earth-image.png";
import marsImg from "../assets/planets/mars.png";
import jupiterImg from "../assets/planets/jupiter.png";
import saturnImg from "../assets/planets/saturn.png";
import uranusImg from "../assets/planets/uranus.png";
import neptuneImg from "../assets/planets/neptune.png";
import sunImg from "../assets/planets/sun.png";

import moonEarth from "../assets/moon/earth-moon.png";
import phobosMarsImg from "../assets/moon/phobos-mars-moon-1.png";
import titanSaturnImg from "../assets/moon/SaturnMoonTitan.png";
import mimasSturnMoon from "../assets/moon/mimas-saturn-moon.png";
import enceladusStaurnImg from "../assets/moon/enceladus-saturn.png";
import europaJupiterImg from "../assets/moon/europa-jupiter.png";
import callistoJupiterImg from "../assets/moon/callisto-jupiter.png";
import ganymedeJupiterMoon from "../assets/moon/ganymede-moon-jupiter.png";
import ioJupiterImg from "../assets/moon/io-jupiter.png";
import titaniaUranusMoon from "../assets/moon/titania-uranus-moon.png";
import umbrielUranusMoon from "../assets/moon/umbriel-uranus-moon.png";
import tritonNeptuneMoon from "../assets/moon/triton-neptune-moon.png";
import hippocampNeptuneMoon from "../assets/moon/hippocamp-neptune-moon.png";

import { planetsProps } from "../types";

export const planets: planetsProps[] = [
  { imgSrc: sunImg, id: 0, astroData: [{ name: "sun" }] },
  { imgSrc: mercuryImg, id: 1, astroData: [{ name: "mercury" }] }, //should there be anothe array for moons of every planet?
  { imgSrc: venusImg, id: 2, astroData: [{ name: "venus" }] },
  {
    imgSrc: earthImg,
    id: 3,
    moons: [{ imgSrc: moonEarth, id: 0, alt: "moon" }],
    moonsAnimationDuration: 20,
    astroData: [{ name: "earth" }],
  },
  {
    imgSrc: marsImg,
    id: 4,
    moons: [{ imgSrc: phobosMarsImg, id: 0, alt: "phobos" }],
    moonsAnimationDuration: 3,
    astroData: [{ name: "mars" }],
  },
  {
    imgSrc: jupiterImg,
    id: 5,
    moons: [
      { imgSrc: europaJupiterImg, id: 0, alt: "europa" },
      { imgSrc: callistoJupiterImg, id: 1, alt: "callisto" },
      { imgSrc: ioJupiterImg, id: 2, alt: "io" },
      { imgSrc: ganymedeJupiterMoon, id: 3, alt: "ganymede" },
    ],
    moonsAnimationDuration: 8,
    astroData: [{ name: "jupiter" }],
  },
  {
    imgSrc: saturnImg,
    id: 6,
    moons: [
      { imgSrc: titanSaturnImg, id: 0, alt: "titan" },
      { imgSrc: enceladusStaurnImg, id: 1, alt: "enceladus" },
      { imgSrc: mimasSturnMoon, id: 2, alt: "mimas" },
    ],
    moonsAnimationDuration: 16,
    astroData: [{ name: "saturn" }],
  },
  {
    imgSrc: uranusImg,
    id: 7,
    moons: [
      { imgSrc: titaniaUranusMoon, id: 0, alt: "titania" },
      { imgSrc: umbrielUranusMoon, id: 1, alt: "umbriel" },
    ],
    moonsAnimationDuration: 5,
    astroData: [{ name: "uranus" }],
  },
  {
    imgSrc: neptuneImg,
    id: 8,
    moons: [
      { imgSrc: tritonNeptuneMoon, id: 1, alt: "triton" },
      { imgSrc: hippocampNeptuneMoon, id: 2, alt: "hippocamp" },
    ],
    moonsAnimationDuration: 25,
    astroData: [{ name: "neptune" }],
  },
];
