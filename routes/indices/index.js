module.exports = {
  path: 'indices',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./view'))
    })
  }
}