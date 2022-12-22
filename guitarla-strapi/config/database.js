module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cehontkgqg4e0eepukpg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_ifbn'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'd2FnWcSSISQQAeqy9wG06RKYoWdQHb3J'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
