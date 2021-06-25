function smooth(path, { factor, iteration } = { factor: 0.75, iteration: 1 }) {
  while (iteration > 0) {
    path = singlesmooth(path, factor)
    iteration--
  }
  return path
}

function singlesmooth(points = [], factor = 0.75) {
  const output = []
  if (points.length > 0) output.push(Array.from(points[0]))
  for (const i in points) {
    const current = points[i]
    const next = points[Number(i) + 1]
    if (!next) break
    const Q = current.map((axis, index) => factor * axis + (1 - factor) * next[index])
    const R = current.map((axis, index) => (1 - factor) * axis + factor * next[index])
    output.push(Q)
    output.push(R)
  }
  if (points.length > 1) output.push(Array.from(points[points.length - 1]))
  return output
}

export default smooth
