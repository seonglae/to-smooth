export type integer = number

export type SmoothOption = {
  factor: number
  iteration: integer
  dimension?: integer
}

export interface MinSizeArray<T> extends Array<T> {}

export function isMinSizeArray<T>(
  array: ArrayLike<T>,
  length: number
): array is MinSizeArray<T> {
  return (<MinSizeArray<T>>array).length >= length
}

export interface Point extends MinSizeArray<number> {}

export class Path extends Array<Point> {}
