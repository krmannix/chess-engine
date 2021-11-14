import { Board } from './board'
import { drawBoard } from './draw'

const board = new Board()
const rows = drawBoard(board)
console.log(rows.join('\n'))
