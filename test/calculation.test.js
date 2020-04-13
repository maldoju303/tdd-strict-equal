const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const sumAll = require('../calculation')

describe('Calculation', () => {
  describe('sumAll', () => {
    it('returns the sum of all the numbers in the array provided', () => {
      const numArray = [1, 2, 3, 4]

      const sum = sumAll(numArray)

      expect(sum).to.equal(10)
    })
  })
})
