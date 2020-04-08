import clownface from 'clownface'
import fetch from '@rdfjs/fetch'
import ns from '@rdfjs/namespace'
import { schema } from '@tpluscode/rdf-ns-builders'

const tbbt = ns('http://localhost:8080/data/person/')

async function main () {
  const response = await fetch('http://zazuko.github.io/tbbt-ld/dist/tbbt.nt')
  const dataset = await response.dataset()

  const graph = clownface({
    dataset,
    term: tbbt.penny
  })

  // Find the names of people who know Penny
  return graph
    .in(schema.knows)
    .map(person => {
      const firstName = person.out(schema.givenName).value
      const lastName = person.out(schema.familyName).value

      return `${firstName} ${lastName} know Penny.`
    })
    .join('\n')
}

main().then(console.log)
