require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  host: process.env.DB_HOST || '127.0.0.1',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect:  process.env.DB_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    timestamps: true, // gera campos created_at e updated_at automaticamente
    underscored: true, // cria tabela com o model em snake_case (UserGroup => user_groups)
    underscoredAll: true // cria colunas da tabela em snake_case (UserGroup => user_groups)
  }
}
