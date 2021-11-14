import { IBoard, ISpace } from './interface'
import { Space } from './space'

const ranks = [1, 2, 3, 4, 5, 6, 7, 8]
const files = [1, 2, 3, 4, 5, 6, 7, 8]

function generateSpaces(): ISpace[] {
  return ranks.flatMap((rank) => files.map((file) => new Space(rank, file)))
}

export class Board implements IBoard {
  spaces: ISpace[]

  constructor() {
    this.spaces = generateSpaces()
  }
}
