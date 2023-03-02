import { ClassModule } from './module/classes/class.module';
import { Module } from '@nestjs/common';
import { UserModule } from './module/users/user.module';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

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
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ClassModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(
    private dataSource: DataSource
  ) {}
}
