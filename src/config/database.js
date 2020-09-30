module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'aTianYmANASA',
  database: 'postgres',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true, // gera campos created_at e updated_at automaticamente
    underscored: true, // cria tabela com o model em snake_case (UserGroup => user_groups)
    underscoredAll: true // cria colunas da tabela em snake_case (UserGroup => user_groups)
  }
}
