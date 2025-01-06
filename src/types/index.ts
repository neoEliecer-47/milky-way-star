import React from "react";

export type planetsProps = {
  imgSrc: string;
  id: number;
  moons?: planetsProps[];
  moonsAnimationDuration?: number | null;
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

interface moons {
  imgSrc: string;
  id: number;
}
