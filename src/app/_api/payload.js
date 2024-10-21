// const { createPayloadHandler } = require('@payloadcms/next-payload')
// const payload = require('payload')

// // Démarrer Payload avant de gérer toute requête
// const payloadHandler = createPayloadHandler({
//   secret: process.env.PAYLOAD_SECRET,
// })

// module.exports = async (req, res) => {
//   if (!payload.mongoConnected) {
//     await payload.init({
//       secret: process.env.PAYLOAD_SECRET,
//       mongoURL: process.env.MONGODB_URI,
//       express: require('express')(),
//     })
//   }
//   return payloadHandler(req, res)
// }
