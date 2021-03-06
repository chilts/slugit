// --------------------------------------------------------------------------------------------------------------------

'use strict'

// --------------------------------------------------------------------------------------------------------------------

function slugit(title) {
  title = title || ''
  title = title.toLowerCase().trim()
  title = title.replace(/[\'\"]/g, '')
  title = title.replace(/[^0-9A-Za-z]+/g, '-')
  title = title.replace(/-+/g, '-').replace(/^-/, '').replace(/-$/, '')
  return title
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = slugit

// --------------------------------------------------------------------------------------------------------------------
