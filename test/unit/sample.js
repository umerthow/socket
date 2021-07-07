const { expect } = require('chai')
const responseCode = require('../helpers/constant.json')

describe("Test sample --->", function() {
  it(`should return true`, async function() {
    const responseUnit = true
    expect(responseUnit).to.be.true;
  })

  it(`should return 200`, async function() {
    const responseUnit = 200
    expect(responseUnit).to.equal(responseCode.successOk)
  })
})