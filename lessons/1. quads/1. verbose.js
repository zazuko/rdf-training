import * as RDF from '@rdfjs/data-model'
import { turtle } from '@tpluscode/rdf-string'

const stuart = RDF.namedNode('http://localhost:8080/data/person/stuart-bloom')
const penny = RDF.namedNode('http://localhost:8080/data/person/penny')

const givenName = RDF.namedNode('http://schema.org/givenName')
const familyName = RDF.namedNode('http://schema.org/familyName')
const jobTitle = RDF.namedNode('http://schema.org/jobTitle')
const knows = RDF.namedNode('http://schema.org/knows')

const quads = [
  RDF.quad(stuart, givenName, RDF.literal('Stuart')),
  RDF.quad(stuart, familyName, RDF.literal('Bloom')),
  RDF.quad(stuart, jobTitle, RDF.literal('comic book store owner', 'en')),
  RDF.quad(stuart, knows, penny)
]

console.log(
  turtle`${quads}`.toString()
)
