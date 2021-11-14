import chalk from 'chalk'
import { Board } from './board'
import { drawBoard } from './draw'
import { BaseColor, ISpace } from './interface'

const log = (x: string) => process.stdout.write(x)

const board = new Board()
const twoDSpaces: ISpace[][] = drawBoard(board)

twoDSpaces.forEach((files, index) => {
  if (index) log('\n')
  files.forEach(file => {
    if (file.baseColor == BaseColor.Black) log(chalk.white(file.human))
    else log(chalk.bgWhite.black(file.human))
  })
  if (index === twoDSpaces.length - 1) log('\n')
})
