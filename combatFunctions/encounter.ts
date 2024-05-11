import { Entity } from "../models/entity";
import { diceRoll } from "../dicerRoller/dice";
import { monsters } from "../database/monsters";

export function beginBattle(characters: Entity[]): Entity[] {
  const combatOrder: Entity[] = [...characters]
  characters.forEach(entity => {
    entity.initiative = diceRoll(20, [])
  })
  combatOrder.sort((a, b) => {
    if (a.initiative === undefined || b.initiative === undefined) {
      throw new Error("Initiative not properly set for all entities.")
    }
    return b.initiative - a.initiative
  })
  return combatOrder
}