export enum BaseColor {
  Black,
  White,
}

export interface ISpace {
  rank: number,
  file: number,
  baseColor: BaseColor,
  human: string,
}

export interface IBoard {
  spaces: ISpace[]
}
