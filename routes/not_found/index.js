module.exports = {
  path: 'not_found',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./view'))
    })
  }
}