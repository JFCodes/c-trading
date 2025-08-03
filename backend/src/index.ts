import APP from './app'

const PORT = process.env.PORT || 3011

APP.listen(PORT, async () => {
  console.log(`Express server listening on port: ${PORT}`)
})
