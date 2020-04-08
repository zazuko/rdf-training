import $rdf from 'rdf-ext'
import { schema } from '@tpluscode/rdf-ns-builders'
import { turtle } from '@tpluscode/rdf-string'
import stream from '../2. stream/3. web'
import ns from '@rdfjs/namespace'

const tbbt = ns('http://localhost:8080/data/person/')

async function main () {
  const dataset = await $rdf.dataset().import(await stream)

  const onlyRajesh = dataset.match(tbbt('rajesh-koothrappali'))
  const jobTitles = dataset.match(null, schema.jobTitle)

  console.log(turtle`
# Triples with Rajesh as subject
${onlyRajesh}

# Every one's job titles
${jobTitles}
  `.toString())
}

main().then(() => process.exit(0))
