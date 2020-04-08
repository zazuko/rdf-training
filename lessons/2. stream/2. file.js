import { createReadStream } from 'fs'
import { resolve } from 'path'
import { parsers } from '@rdfjs/formats-common'

export default function (who = 'penny') {
  const turtle = createReadStream(resolve(__dirname, `../../node_modules/tbbt-ld/data/person/${who}.ttl`))

  return parsers.import('text/turtle', turtle, {
    baseIRI: `http://localhost:8080/data/person/${who}`
  })
}
