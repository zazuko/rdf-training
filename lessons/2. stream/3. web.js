import fetch from '@rdfjs/fetch'
// import fetch from '@rdfjs/fetch-lite'

export default fetch('http://zazuko.github.io/tbbt-ld/dist/tbbt.nt')
  .then(r => r.quadStream())
