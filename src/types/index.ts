export type planetsProps = {
  imgSrc: string;
  id: number;
  moons?: planetsProps[];
};

export type dataAstrosProps = {
  dataAstros: planetsProps[];
  currentIndex: number;
  handleCLick: (index: number) => void;
}


