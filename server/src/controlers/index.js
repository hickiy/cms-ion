import file_ctr from './file_ctr/index.js'

export default function (app) {
  app.use('/file', file_ctr)
}