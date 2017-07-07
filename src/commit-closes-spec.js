'use strict'

const snapshot = require('snap-shot')

/* global describe, it */
const commitCloses = require('.')

// parsing tests adapted from
// https://github.com/conventional-changelog/conventional-changelog
describe('commit-closes', () => {
  it('nothing closed', () => {
    const issues = commitCloses('this is subject line', 'this is commit body')
    snapshot(issues)
  })
})
