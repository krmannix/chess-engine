import { BaseColor, IBoard, ISpace } from './interface'
import { fileToLetter } from './util'

const ranks = [1, 2, 3, 4, 5, 6, 7, 8]
const files = [1, 2, 3, 4, 5, 6, 7, 8]

function generateSpaces(): ISpace[] {
  return ranks.flatMap((rank) => files.map((file) => new Space(rank, file)))
}

export class Space implements ISpace {
  rank: number
  file: number

  constructor(rank: number, file: number) {
    this.rank = rank
    this.file = file
  }

  public get baseColor() {
    return (this.rank + this.file) % 2 ? BaseColor.White : BaseColor.Black
  }

  public get human() {
    return `${fileToLetter(this.file)}${this.rank}`
  }
}


export class Board implements IBoard {
  spaces: ISpace[]

  constructor() {
    this.spaces = generateSpaces()
  }
}
