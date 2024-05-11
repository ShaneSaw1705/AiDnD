import { Entity } from "../models/entity";
import { diceRoll } from "../dicerRoller/dice";

export function attack (target: Entity, initiator: Entity): void {
  const roll = diceRoll(20, [])
  if (roll > target.armourClass) {
    console.log('hit!')
    const damage = diceRoll(initiator.damage, [2])
    target.health -= damage
    console.log(damage)
  } else {
    console.log('miss!')
  }
}