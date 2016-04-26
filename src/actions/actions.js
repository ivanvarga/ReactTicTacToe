import * as ActionTypes from './actionTypes'
export function ThickCell(cellId) {
  return { type: ActionTypes.THICK, cellId:cellId }
}

export function Restart(cellId) {
  return { type: ActionTypes.RESTART }
}