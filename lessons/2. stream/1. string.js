import { turtle } from '@tpluscode/rdf-string'
import ns from '@rdfjs/namespace'
import { schema } from '@tpluscode/rdf-ns-builders'
import { literal } from '@rdfjs/data-model'
import Parser from '@rdfjs/parser-n3'
import toStream from 'string-to-stream'

const tbbt = ns('http://localhost:8080/data/person/')

const rdf = turtle`
  ${tbbt('stuart-bloom')} ${schema.givenName} "Stuart" ;
                                   ${schema.familyName} "Bloom" ;
                                   ${schema.jobTitle} ${literal('comic book store owner', 'en')} ;
                                   ${schema.knows} ${tbbt.penny} .
`

const parser = new Parser()

export default parser.import(toStream(rdf))
