import $rdf from 'rdf-ext'
import stuartQuads from '../1. quads/2. namespaces'
import stream from '../2. stream/2. file'

async function main () {
  const amyDataset = await $rdf.dataset().import(stream('amy-farrah-fowler'))
  const pennyStream = await stream('penny')

  const dataset = await $rdf.dataset()
    .addAll(stuartQuads)
    .merge(amyDataset)
    .import(pennyStream)

  console.log(dataset.toCanonical())
}

main().then(() => process.exit())
