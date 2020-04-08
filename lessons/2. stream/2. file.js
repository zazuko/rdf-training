import { createReadStream } from 'fs'
import { resolve } from 'path'
import { parsers } from '@rdfjs/formats-common'

const stuartTurtle = createReadStream(resolve(__dirname, '../../node_modules/tbbt-ld/data/person/stuart-bloom.ttl'))

export default parsers.import('text/turtle', stuartTurtle)
