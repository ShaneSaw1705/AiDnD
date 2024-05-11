import { Entity } from "../models/entity";

export function attack (target: Entity, initiator: Entity): void {
  target.health -= initiator.damage
}