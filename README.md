# commit-closes

> Parses commit message to find all &#34;fixes&#34;, &#34;closes&#34; and &#34;resolves&#34; issue numbers

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

Commit parsing code based on
[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)

You can [close GitHub issues with commit text](https://help.github.com/articles/closing-issues-via-commit-messages/). For example

```
git commit -m "this feature closes #4"
```

will close issue 4 when pushed to github. This module can find issues closed
given commit subject and body. All forms are supported:
`fix|fixes|fixed|close|closes|closed|resolve|resolves|resolved`
case-insensitive.

## Install

Requires [Node](https://nodejs.org/en/) version 6 or above.

```sh
npm install --save commit-closes
```

## Use

Give this function commit subject and optional body and it will return list
of closed issue numbers. If no issues is closed, returns empty list

```js
const commitCloses = require('commit-closes')
const closed = commitCloses('this is subject', `
this commit closes #2
and resolves #21, #4
and fixed #10
`)
// closed is [2, 21, 4, 10]
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/commit-closes/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/commit-closes.svg?downloads=true
[npm-url]: https://npmjs.org/package/commit-closes
[ci-image]: https://travis-ci.org/bahmutov/commit-closes.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/commit-closes
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
