require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  module.exports = {
    type: 'postgres',
    host: process.env.BD_HOST,
    port: +process.env.BD_PORT || 5432,
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
    synchronize: false,
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/models/*.ts'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
  };
} else if (process.env.NODE_ENV === 'production') {
  module.exports = {
    type: 'postgres',
    host: process.env.BD_PROD_HOST,
    port: +process.env.BD_PROD_PORT || 5432,
    username: process.env.BD_PROD_USERNAME,
    password: process.env.BD_PROD_PASSWORD,
    database: process.env.BD_PROD_DATABASE,
    synchronize: false,
    extra: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    migrations: ['build/database/migrations/*.js'],
    entities: ['build/models/*.js'],
    cli: {
      migrationsDir: 'build/database/migrations',
    },
  };
} else {
    console.log('NODE_ENV incorreto...');
}
