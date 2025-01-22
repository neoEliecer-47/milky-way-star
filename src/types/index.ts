import React from "react";

export type planetsProps = {
  imgSrc: string;
  id: number;
  moons?: moons[];
  moonsAnimationDuration?: number | null;
  astroData: astroData[];
};

export type moonsProps = {
  moons: moons[];
  animationDuration?: number;
};

export type dataAstrosProps = {
  dataAstros: planetsProps[];
  currentIndex: number;
  handleCLick: (index: number) => void;
};

export type spaceLayerProps = {
  size: string;
  selector?: string;
  starsLength: number;
  duration: string;
  divRef: React.RefObject<HTMLDivElement>;
};

export type modalAstroDetailsProps = {
  astroData: astroData[];
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
 
};

interface moons {
  imgSrc: string;
  id: number;
  alt: string;
}

export interface astroData {
  id: number;
  name: string;
  type?: string;
  lifespan?: string;
  composition?: string;
  temperature?: number;
  size?: string;
  age?: number;
  mass?: string;
  rotation?: number;
  orbitalPeriod?: number;
  dayNightCycle?: number;
  surface?: string;
  Atmosphere?: string;
  facts?: string;
  position?: number;
  ringSystem?: string;
  weather?: string;
  images: astroImages[];
  gravity: string;
}

export type staticDataProps = {
  title: string;
  text?: string;
  textBefore?: string;
  textAfterwards?: string;
  value?: number;
};

export type modalImagesProps = {
  images: astroImages[];
};

export type navbarModalProps = {
  titles: string[];
  activeOptionIndex: number;
  updateOptionIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type readMoreProps = {
  title: string;
  text: string;
};

interface astroImages {
  imgSrc: string;
}
