// --------------------------------------------------------------------------------------------------------------------

"use strict"

// npm
var test = require('tape')

// local
var slugit = require('../')

// --------------------------------------------------------------------------------------------------------------------

var simple = [
  [ 'Simple',               'simple',        ],
  [ 'Hello, World!',        'hello-world',   ],
  [ ' a ',                  'a',             ],
  [ '1234',                 '1234',          ],
  [ '',                     '',              ],
  [ 'The Mountains',        'the-mountains', ],
  [ "Andy's Tea",           'andys-tea',     ],
  [ '!@#^&Expletive&@^#*@', 'expletive',     ],
]

test('simple', function(t) {
  t.plan(simple.length)

  simple.forEach(function(row) {
    t.equal(slugit(row[0]), row[1], 'Testing ' + row[0])
  })

  t.end()
})

// --------------------------------------------------------------------------------------------------------------------
