import { ISpace } from './interface'

export function fileToLetter(file: number): string {
  switch (file) {
    case 1: return 'A'
    case 2: return 'B'
    case 3: return 'C'
    case 4: return 'D'
    case 5: return 'E'
    case 6: return 'F'
    case 7: return 'G'
    case 8: return 'H'
    default: return 'X'
  }
}

export function twoDimensional(spaces: ISpace[]) {
  const rankToSpaces: Record<number, ISpace[]> = {}

  spaces.forEach(space => {
    if (rankToSpaces[space.rank]) {
      rankToSpaces[space.rank].push(space)
    } else {
      rankToSpaces[space.rank] = [space]
    }
  })

  return Object.values(rankToSpaces)
}
