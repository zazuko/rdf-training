import clownface from 'clownface'
import $rdf from 'rdf-ext'
import ns from '@rdfjs/namespace'
import { schema } from '@tpluscode/rdf-ns-builders'
import { turtle } from '@tpluscode/rdf-string'

const tbbt = ns('http://localhost:8080/data/person/')

const dataset = $rdf.dataset()

const graph = clownface({
  dataset,
  term: tbbt('stuart-bloom')
})

graph
  .addOut(schema.givenName, graph.namedNode('Stuart'))
  .addOut(schema.familyName, graph.namedNode('Bloom'))
  .addOut(schema.jobTitle, graph.literal('comic book store owner', 'en'))
  .addOut(schema.knows, tbbt.penny, penny => {
    penny.addOut(schema.address, address => {
      address.addOut(schema.addressCountry, graph.literal('US'))
      address.addOut(schema.addressLocality, graph.literal('Pasadena'))
      address.addOut(schema.addressRegion, graph.literal('CA'))
      address.addOut(schema.postalCode, graph.literal('91104'))
      address.addOut(schema.streetAddress, graph.literal('2311 North Los Robles Avenue, Aparment 4B'))
    })
  })

console.log(turtle`${dataset}`.toString())
