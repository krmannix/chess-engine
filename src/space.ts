import { BaseColor, ISpace } from './interface'
import { fileToLetter } from './util'

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
