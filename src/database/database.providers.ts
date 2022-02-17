import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        name: 'dev',
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: `${process.env.DB_USER}`,
        password: `${process.env.DB_PASS}`,
        database: `${process.env.DB_NAME}`,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
