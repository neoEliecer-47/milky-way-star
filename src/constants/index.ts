import mercuryImg from "../assets/planets/mercury.avif";
import venusImg from "../assets/planets/venus.avif";
import earthImg from "../assets/planets/earth-image.avif";
import marsImg from "../assets/planets/mars.avif";
import jupiterImg from "../assets/planets/jupiter.avif";
import saturnImg from "../assets/planets/saturn.avif";
import uranusImg from "../assets/planets/uranus-planet.avif";
import neptuneImg from "../assets/planets/neptune-planet.avif";
import sunImg from "../assets/planets/sun.avif";

import moonEarth from "../assets/moon/earth-moon.avif";
import phobosMarsImg from "../assets/moon/phobos-mars-moon-1.avif";
import titanSaturnImg from "../assets/moon/SaturnMoonTitan.avif";
import mimasSturnMoon from "../assets/moon/mimas-saturn-moon.avif";
import enceladusStaurnImg from "../assets/moon/enceladus-saturn.avif";
import europaJupiterImg from "../assets/moon/europa-jupiter.avif";
import callistoJupiterImg from "../assets/moon/callisto-jupiter.avif";
import ganymedeJupiterMoon from "../assets/moon/ganymede-moon-jupiter.avif";
import ioJupiterImg from "../assets/moon/io-jupiter.avif";
import titaniaUranusMoon from "../assets/moon/titania-uranus-moon.avif";
import umbrielUranusMoon from "../assets/moon/umbriel-uranus-moon.avif";
import tritonNeptuneMoon from "../assets/moon/triton-neptune-moon.avif";
import hippocampNeptuneMoon from "../assets/moon/hippocamp-neptune-moon.avif";

import sunModal1 from "../assets/planets/modal-images/sun-1.avif";
import sunModal2 from "../assets/planets/modal-images/sun-2.avif";
import mercuryModal1 from "../assets/planets/modal-images/mercury-1.avif";
import mercuryModal2 from "../assets/planets/modal-images/mercury-2.avif";
import venusModal1 from "../assets/planets/modal-images/venus-1.avif";
import venusModal2 from "../assets/planets/modal-images/venus-2.avif";
import earthModal1 from "../assets/planets/modal-images/earth-1.avif";
import earthModal2 from "../assets/planets/modal-images/earth-2.avif";
import marsModal1 from "../assets/planets/modal-images/mars-1.avif";
import marsModal2 from "../assets/planets/modal-images/mars-2.avif";
import jupiterModal1 from "../assets/planets/modal-images/jupiter-1.avif";
import jupiterModal2 from "../assets/planets/modal-images/jupiter-2.avif";
import saturnModal1 from "../assets/planets/modal-images/saturn-1.avif";
import saturnModal2 from "../assets/planets/modal-images/saturn-2.avif";
import uranusModal1 from "../assets/planets/modal-images/uranus-1.avif";
import uranusModal2 from "../assets/planets/modal-images/uranus-2.avif";
import neptuneModal1 from "../assets/planets/modal-images/neptune-1.avif";
import neptuneModal2 from "../assets/planets/modal-images/neptune-2.avif";

import { planetsProps } from "../types";

export const planets: planetsProps[] = [
  {
    imgSrc: sunImg,
    id: 0,
    astroData: [
      {
        //every astro data array has only one object: that means only one position -> 0
        id: 0,
        name: "sun",
        type: "yellow dwarf star",
        age: 4.6,
        size: "Diameter of about 1.39 million kilometers",
        mass: "about 330,000 times that of earth",
        composition:
          "hydrogen, helium and other elements like Oxygen, carbon, neon and iron",
        temperature: 15,
        lifespan:
          "The sun is about halfway throught its lifecycle. In approximately 5 billion years, it will expand into a red giant before eventually collapsing into a white dwarf.",
        images: [{ imgSrc: sunModal1 }, { imgSrc: sunModal2 }],
        surface:
          "the Sun does not hace a solid surface. The part of the sun commonly called its surface is the photosphere",
        gravity:
          "Sun`s gravity is incredibly powerful, about 274 m/s², 27.94 times stronger than Earth`s gravity",
      },
    ],
  },
  {
    imgSrc: mercuryImg,
    id: 1,
    astroData: [
      {
        id: 1,
        name: "mercury",
        type: "terrestial rocky planet",
        position: 1,
        size: "about 4,880 kilometers - smallest planet in the solar system",
        mass: "Approximely 5.5% of Earth mass",
        temperature: 167,
        facts:
          "Mercury is the smallest planet in our solar system and the nearest to the Sun, Mercury is only slightly larger than Earth Moon",
        surface: "Rocky, covered in craters, with plains and high cliffs",
        Atmosphere:
          "Extremely thin, composed mainly of oxygen, sodium, hydrogen, helium and potassium",
        orbitalPeriod: 88,
        rotation: 59,
        dayNightCycle: 176,
        age: 4.6,
        images: [{ imgSrc: mercuryModal1 }, { imgSrc: mercuryModal2 }],
        gravity:
          "Mercury`s gravity is 3.7 m/s², 0.38 times weaker than Earth`s gravity, that means if you weigh 70kg on Earth, you would weigh 27kg on Mercury",
      },
    ],
  }, //should there be anothe array for moons of every planet?
  {
    imgSrc: venusImg,
    id: 2,
    astroData: [
      {
        id: 2,
        name: "venus",
        type: "Terrestial rocky planet",
        position: 2,
        size: "about 12,104 kilometers - slightly smaller than Earth",
        mass: "roughly 80% of Earth mass",
        temperature: 475,
        facts:
          "Venus is our closest planetary neighbor. Its the hottest planet in our solar system",
        surface: "Volcanic plains, mountains, craters, and vast lava flows",
        Atmosphere:
          "thick and composed mostly of carbon dioxide and nitrogen, with clouds of sulfuric acid",
        orbitalPeriod: 225,
        rotation: 243,
        dayNightCycle: 60,
        age: 4.6,
        images: [{ imgSrc: venusModal1 }, { imgSrc: venusModal2 }],
        gravity:
          "Venus`s gravity is 8.87 m/s², 0.9 times weaker than Earth`s gravity, that means if you weigh 80kg on Earth, you would weigh 72kg on Venus",
      },
    ],
  },
  {
    imgSrc: earthImg,
    id: 3,
    moons: [{ imgSrc: moonEarth, id: 0, alt: "moon" }],
    moonsAnimationDuration: 20,
    astroData: [
      {
        id: 3,
        name: "earth",
        type: "terrestial rocky planet",
        position: 3,
        size: "Aproximately 12.742 kilometers",
        mass: "about 5.97 x 10~24 kilograms",
        temperature: 14,
        facts:
          "Earth is the only planet that support life due to its liquid water, atmosphere,and suitable climate. \n Earth is the only planet in our solar system known to have liquid water which allowed life to begin about 3.8 billion years ago.",
        surface: "71% covered by water, 29% land",
        Atmosphere:
          "composed mainly of nitrogen and oxygen, with traces of other gases like carbon dioxide and argon.",
        orbitalPeriod: 365,
        rotation: 24,
        dayNightCycle: 12,
        age: 4.5,
        images: [{ imgSrc: earthModal1 }, { imgSrc: earthModal2 }],
        gravity:
          "Earth`s gravity is 9.8 m/s² compared to the Moon`s gravity which is 1.6 m/s², so if you wiegh 80kg on Earth, you would weigh 13kg on the Moon, incredible right?",
      },
    ],
  },
  {
    imgSrc: marsImg,
    id: 4,
    moons: [{ imgSrc: phobosMarsImg, id: 0, alt: "phobos" }],
    moonsAnimationDuration: 3,
    astroData: [
      {
        id: 4,
        name: "mars",
        type: "terrestrial rocky planet",
        position: 4,
        size: "about 6,779 kilometers - roughly half the size of earth",
        mass: "about 10.7% of Earth mass",
        temperature: -62,
        facts:
          "evidence suggests Mars once had flowing water and a thicker atmosphere.",
        surface:
          "reddish due to iron oxide in the soil and polar ice caps composed of water ice and frozen carbon dioxide",
        Atmosphere:
          "thin atmosphere composed mainly of carbon dioxide, nitrogen and argon",
        orbitalPeriod: 687,
        rotation: 24.3,
        age: 4.6,
        images: [{ imgSrc: marsModal1 }, { imgSrc: marsModal2 }],
        gravity:
          "Mars`s gravity is about 38% of Earth`s gravity, 3.7 m/s², meaning you`d weigh quite less on Mars",
      },
    ],
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
    astroData: [
      {
        id: 5,
        name: "jupiter",
        type: "gas giant",
        position: 5,
        mass: "about 318 times the mass of Earth",
        size: "about 139,820 kilometers - 11 times wider than Earth",
        temperature: -145,
        facts:
          "the planet immense gravity helps shield the inner solar system from asteroid impacts by capturing or deflecting them. known for its colorful cloud bands, violent storms and the iconic Great Red Spot",
        surface:
          "jupiter lacks a solid surface, primarily hydrogen and helium with trace amounuts of methane",
        Atmosphere:
          "made up of hydrogen and helium, its well-mixed and extends thousands of kilometers below the clouds",
        orbitalPeriod: 11.86,
        rotation: 9,
        age: 4.6,
        images: [{ imgSrc: jupiterModal1 }, { imgSrc: jupiterModal2 }],
        gravity:
          "Jupiter`s gravity is 24.79 m/s², 2.53 times stronger than Earth`s gravity, that means if you weigh 70kg on Earth, you would weigh 177kg on Jupiter, incredible right?",
      },
    ],
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
    astroData: [
      {
        id: 6,
        name: "saturn",
        type: "gas giant",
        position: 6,
        mass: "5.68 x 10~26 kg - 95 times the mass of the Earth",
        temperature: -178,
        size: "saturn is the second largest in the solar system, with 120,500 kilometers. This makes it about nine times wider than Earth.",
        facts:
          "Saturn is so big that you could fit about 764 Earths inside it. Its known for its rings, moons and other unique features",
        surface:
          "no solid surface, a dense atmosphere transitions to liquid and metalic hydrogen layers",
        Atmosphere: "composed primarily of hydrogen and helium",
        orbitalPeriod: 29.5,
        rotation: 10.7,
        age: 4.5,
        ringSystem:
          "the most extensive and visible ring system in the Solar System, made of ice, rock and dust",
        weather:
          "extremely strong winds and storms, with some speeds reaching 1,800 km/h",
        images: [{ imgSrc: saturnModal1 }, { imgSrc: saturnModal2 }],
        gravity:
          "Saturn`s gravity is 10.44 m/s², 1.07 times stronger than Earth`s gravity, meaning you`d weigh 1.07 times more on Saturn",
      },
    ],
  },
  {
    imgSrc: uranusImg,
    id: 7,
    moons: [
      { imgSrc: titaniaUranusMoon, id: 0, alt: "titania" },
      { imgSrc: umbrielUranusMoon, id: 1, alt: "umbriel" },
    ],
    moonsAnimationDuration: 5,
    astroData: [
      {
        id: 7,
        name: "uranus",
        type: "ice giant",
        position: 7,
        mass: "14.5 times the mass of the earth",
        temperature: -224,
        size: "this ice giant planet has a equatorial diameter of 51,118 kilometers. Uranus is four times wider than Earth",
        facts:
          "Uranus is a very cold and windy world. its surrounded by 13 faint rings and 28 small moons and its the only planet that spins on its side.",
        surface:
          "uranus does not have a true surface, its mostly swirling fluids",
        Atmosphere:
          "primarily hydrogen, helium and methane, giving the planet its blue-green color",
        orbitalPeriod: 84,
        rotation: 17,
        age: 4.5,
        weather: "winds up to 900 km/h",
        ringSystem:
          "uranus has two sets of ring, the inner system of nine rings, the another one is reddish like dusty.",
        images: [{ imgSrc: uranusModal1 }, { imgSrc: uranusModal2 }],
        gravity:
          "Uranus`s gravity is 8.69 m/s², 0.89 times weaker than Earth`s gravity, meaning you`d weigh 0.89 times less on Uranus",
      },
    ],
  },
  {
    imgSrc: neptuneImg,
    id: 8,
    moons: [
      { imgSrc: tritonNeptuneMoon, id: 1, alt: "triton" },
      { imgSrc: hippocampNeptuneMoon, id: 2, alt: "hippocamp" },
    ],
    moonsAnimationDuration: 25,
    astroData: [
      {
        id: 8,
        name: "neptune",
        type: "ice giant",
        position: 8,
        size: "with an equatorial diameter of 49,528 kilometers. Neptune is about four times wider than Earth. If Earth were the size of a nickel, Neptune would be about as big as a baseball.",
        mass: "17 times the mass of the Earth",
        temperature: -214,
        facts:
          "dark, cold and whipped by supersonic winds. Neptune has rings, but they are difficult to see and its seasons last for over 40 years because it takes too long to orbit the sun since is the farthest planet from it.",
        surface:
          "it does not have a solid surface, its atmosphere extends to great depths, gradually merging into water and other melted ices",
        Atmosphere: "pimarily composed of hydrogen, helium and methane",
        orbitalPeriod: 165,
        rotation: 16,
        age: 4.5,
        weather: "",
        images: [{ imgSrc: neptuneModal1 }, { imgSrc: neptuneModal2 }],
        gravity:
          "Neptune`s gravity is 11.15 m/s², 1.14 times stronger than Earth`s gravity, that means if you weigh 70kg on Earth, you would weigh 80kg on Neptune",
      },
    ],
  },
];

export const astrosTitleColors = [
  "rgb(224, 180, 35), rgb(247, 84, 20)",
  "rgba(100, 100, 100, 0.3), rgb(100, 100, 100)",
  "rgb(231, 100, 34), rgb(194, 69, 6)",
  "white, rgb(0, 112, 0), blue",
  "rgb(235, 49, 49), rgb(175, 6, 6)",
  "white, orange, rgba(247, 165, 118, 0.7)",
  "rgba(243, 239, 237, 0.92), rgba(247, 165, 118, 0.9), rgba(138, 129, 8, 0.943)",
  "rgba(118, 200, 206, 0.943),  rgba(135, 136, 190, 0.943)",
  "blue, rgba(92, 53, 185, 0.943)",
];

export const astrosShadowColorsModal = [
  "rgb(224, 180, 35)",
  "rgb(100, 100, 100)",
  "rgb(231, 100, 34)",
  "rgba(9, 211, 46, 0.71)",
  "rgba(230, 16, 16, 0.78)",
  "rgba(247, 165, 118, 0.7)",
  "rgba(138, 129, 8, 0.943)",
  "rgba(97, 221, 230, 0.84)",
  "rgba(0, 0, 255, 0.5)",
];
