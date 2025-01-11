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
  astroData: astroData[],
  isOpen: boolean,
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>,
  id: number
}

interface moons {
  imgSrc: string;
  id: number;
  alt: string;
}

interface astroData {
  name: string;
  type?: string;
  concept?: string;
  composition?: string;
  temperature?: number;
  size?: number;

}
