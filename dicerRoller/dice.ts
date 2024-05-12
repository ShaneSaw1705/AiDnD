import { getRandomNumber } from "../math/random-number"

export function diceRoll(size: number, modifiers: number[]): number {
  let diceRoll: number = getRandomNumber(1, size)
  modifiers.forEach(mod => {
    diceRoll += mod
  })
  return diceRoll
}