'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

function commitCloses (subject, body) {
  la(is.unemptyString(subject), 'commit is missing subject', subject)
  la(is.maybe.unemptyString(body), 'wrong commit body', body)

  const list = []
  return list
}

module.exports = commitCloses
