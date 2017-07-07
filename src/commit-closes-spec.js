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

  it('finds one issue in subject', () => {
    const issues = commitCloses('this is subject line, closes #22',
      'this is commit body')
    snapshot(issues)
  })

  it('finds multiple issues in subject', () => {
    const issues = commitCloses('this is subject line, closes #22, #40, #1001',
      'this is commit body')
    snapshot(issues)
  })

  it('finds multiple issues in body on separate lines', () => {
    const issues = commitCloses('this is subject line',
      `
      this is commit body
      blah blah blah
      Closes #123
      Closes #25
      Fixes #33
      `
    )
    snapshot(issues)
  })

  it('finds multiple issues in body same line', () => {
    const issues = commitCloses('this is subject line',
      `this is commit body
      blah blah blah
      Closes #123 Closes #25 Fixes #32`
    )
    snapshot(issues)
  })

  it('finds multiple issues in body with dots', () => {
    const issues = commitCloses('this is subject line',
      `
      this is commit body
      blah blah blah
      Closes #2, #3. Resolves #4. Fixes #5. Fixes #6.
      and another line`
    )
    snapshot(issues)
  })
})
