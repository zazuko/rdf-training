import Serializer from '@rdfjs/serializer-jsonld-ext'
// import { serializers } from '@rdfjs/formats-common'
import quadStream from './3. web'

async function main () {
  const outStream = new Serializer().import(await quadStream)

  // const outStream = serializers.import('application/ld+json', await quadStream)

  outStream.on('data', quad => {
    console.log(JSON.stringify(quad))
  })

  outStream.on('end', () => {
    process.exit(0)
  })
}

main()
