import React from "react";

export type planetsProps = {
  imgSrc: string;
  id: number;
  moons?: moons[];
  moonsAnimationDuration?: number | null;
  astroData: astroData[]
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
  astroData: astroData,
  isOpen: boolean,
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>,
  index: number
}

interface moons {
  imgSrc: string;
  id: number;
  alt: string;
}

export interface astroData {
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
  dayTemperature?: number;
  nightTemperature?: number;
  facts?: string;
  position?: number,
  ringSystem?: string,
  weather?: string
}
