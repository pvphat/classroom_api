import { Module } from '@nestjs/common';
import { PeopleModule } from './people/people.module';
import { ConfigModule } from '@nestjs/config'

@Module ({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/config/dev.env',
    }),
    PeopleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
