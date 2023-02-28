import { Module } from '@nestjs/common';
import { PeopleModule } from './people/people.module';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleEntity } from './people/people.entity';

@Module ({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/config/dev.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.APP_DB_HOST,
      port: parseInt(process.env.APP_DB_PORT),
      username: process.env.APP_DB_USERNAME,
      password: process.env.APP_DB_PASSWORD,
      database: process.env.APP_DB_DATABASE,
      entities: [PeopleEntity],
      synchronize: true,
    }),
    PeopleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
