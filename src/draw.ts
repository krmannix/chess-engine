import { IBoard, ISpace } from './interface'
import { twoDimensional } from './util'


export function drawBoard(board: IBoard): string[] {
  const ranks = twoDimensional(board.spaces).sort((as, bs) => bs[0].rank - as[0].rank)
  return ranks.map((spaces: ISpace[]) =>
    spaces.sort(a => a.file).map(a => a.human).join(' ')
  )
}
