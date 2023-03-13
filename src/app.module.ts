import { SubmissionModule } from './modules/submissions/submission.module';
import { AssigneeModule } from './modules/assignees/assignee.module';
import { UsersInClassModule } from './modules/users-in-class/users-in-class.module';
import { AssignmentModule } from './modules/assignments/assignment.module';
import { ClassModule } from './modules/classes/class.module';
import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './modules/posts/post.module';
import { ServiceModule } from './common/service.module';

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
    ServiceModule,
    UserModule,
    ClassModule,
    AssignmentModule,
    PostModule,
    UsersInClassModule,
    AssigneeModule,
    SubmissionModule,
    
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule {
  constructor(
  ) {}
}
