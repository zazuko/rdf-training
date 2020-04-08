import $rdf from 'rdf-ext'
import { turtle } from '@tpluscode/rdf-string'
import stuartQuads from '../1. quads/2. namespaces'
import personStream from '../2. stream/2. file'

const dataset = $rdf.dataset(stuartQuads)
const pennyStream = personStream()

pennyStream.on('data', quad => {
  dataset.add(quad)
})

pennyStream.on('end', () => {
  console.log(turtle`${dataset}`.toString())
})
