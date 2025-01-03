export type planetsProps = {
  imgSrc: string;
  id: number;
};

export type dataAstrosProps = {
  dataAstros: planetsProps[];
  currentIndex: number;
  handleCLick: (index: number) => void;
}
