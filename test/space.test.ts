import { BaseColor } from '../src/interface'
import { Space } from '../src/space'

describe('baseColor', () => {
  test('it returns black for A1', () => {
    const subject = new Space(1, 1)
    expect(subject.baseColor).toBe(BaseColor.Black)
  })

  test('it returns white for A2', () => {
    const subject = new Space(2, 1)
    expect(subject.baseColor).toBe(BaseColor.White)
  })

  test('it returns white for B1', () => {
    const subject = new Space(1, 2)
    expect(subject.baseColor).toBe(BaseColor.White)
  })

  test('it returns black for A2', () => {
    const subject = new Space(2, 2)
    expect(subject.baseColor).toBe(BaseColor.Black)
  })
})
