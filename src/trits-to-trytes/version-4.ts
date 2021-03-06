import { trit } from "../types"

const TRYTES = [
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "9",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"
]

export function tritsToTrytes(trits: trit[]): string {
  const size = Math.ceil(trits.length / 3)

  var trytes = ""

  for (var i = 0; i < size; i += 1) {
    trytes += TRYTES[
      (trits[i*3 + 0] || 0)
      +
      (trits[i*3 + 1] || 0)*3
      +
      (trits[i*3 + 2] || 0)*9
      +
      13
    ]
  }

  return trytes
}
