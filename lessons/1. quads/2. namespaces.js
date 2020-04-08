import * as RDF from '@rdfjs/data-model'
import ns from '@rdfjs/namespace'
// import { turtle } from '@tpluscode/rdf-string'
import { schema } from '@tpluscode/rdf-ns-builders'

const tbbt = ns('http://localhost:8080/data/person/')

const stuart = tbbt('stuart-bloom')
const penny = tbbt.penny

const quads = [
  RDF.quad(stuart, schema.givenName, RDF.literal('Stuart')),
  RDF.quad(stuart, schema.familyName, RDF.literal('Bloom')),
  RDF.quad(stuart, schema.jobTitle, RDF.literal('comic book store owner', 'en')),
  RDF.quad(stuart, schema.knows, penny)
]

/*
console.log(
  turtle`${quads}`.toString()
)
*/

export default quads
