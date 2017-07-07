'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

function commitCloses (subject, body) {
  la(is.unemptyString(subject), 'commit is missing subject', subject)
  la(is.maybe.unemptyString(body), 'wrong commit body', body)

  if (body === undefined) {
    body = ''
  }

  const issues = []

  const lines = [subject].concat(body.split('\n'))
  lines.forEach(function (line) {
    const regex = /(?:Close|Closes|Closed|Fix|Fixes|Fixed|Resolve|Resolves|Resolved)\s((?:#\d+(?:,\s)?)+)/ig
    const match = line.match(regex)

    if (match) {
      match.forEach(function (m) {
        if (m) {
          m.split(',').forEach(function (i) {
            const issue = i.match(/\d+/)
            if (issue) {
              issues.push(parseInt(issue[0], 10))
            }
          })
        }
      })
    }
  })

  return issues
}

module.exports = commitCloses
