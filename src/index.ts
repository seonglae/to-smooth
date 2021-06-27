import { isMinSizeArray } from './types'
import type { Path, SmoothOption } from './types'

function smooth(
  path: Path,
  { factor, iteration, dimension }: SmoothOption = {
    factor: 0.75,
    iteration: 1
  }
) {
  if (dimension && !path.every((point) => isMinSizeArray(point, dimension)))
    throw new Error('Dimension min size Error')
  while (iteration > 0) {
    path = singlesmooth(path, factor, dimension)
    iteration--
  }
  return path
}

function singlesmooth(
  points: Path = [],
  factor: number = 0.75,
  dimension?: number
) {
  const output = []
  if (points.length > 0) output.push(Array.from(points[0]))
  for (const i in points) {
    const current = dimension ? points[i].slice(0, dimension) : points[i]
    const next = points[Number(i) + 1]
    if (!next) break
    const Q = current.map(
      (axis, index) => factor * axis + (1 - factor) * next[index]
    )
    const R = current.map(
      (axis, index) => (1 - factor) * axis + factor * next[index]
    )
    output.push(Q)
    output.push(R)
  }
  if (points.length > 1) output.push(Array.from(points[points.length - 1]))
  return output
}

export default smooth
