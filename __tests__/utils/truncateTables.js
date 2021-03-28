const { sequelize } = require('../../src/app/models')

const truncateTables = () => {
  return Promise.all(
    Object.values(sequelize.models).map(model => {
      return model.destroy({
        truncate: true,
        force: true
      })
    })
  )
}
module.exports = truncateTables