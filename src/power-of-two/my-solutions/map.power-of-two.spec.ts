import { getPoweredByTwo } from './fori.power-of-two'

describe('powerOfTwo', () => {
  it('should get a new list of numbers that are to the power of 2', () => {
    const given = [1, 2, 3]

    const actual = getPoweredByTwo(given)

    expect(actual).toEqual([1, 4, 9])
  })
})
