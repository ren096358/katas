export function getHighestNumber(numbers: number[]): number {
  return <number>numbers.slice().sort().pop()
}
