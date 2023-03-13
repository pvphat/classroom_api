import {Global, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AssigneeEntity } from 'src/modules/assignees/assignee.entity';
import { AssigneeService } from 'src/modules/assignees/assignee.service';
import { AssignmentEntity } from 'src/modules/assignments/assigment.entity';
import { AssignmentService } from 'src/modules/assignments/assignment.service';
import { ClassEntity } from 'src/modules/classes/class.entity';
import { ClassService } from 'src/modules/classes/class.service';
import { PostEntity } from 'src/modules/posts/post.entity';
import { PostService } from 'src/modules/posts/post.service';
import { SubmissionEntity } from 'src/modules/submissions/submission.entity';
import { SubmisssionService } from 'src/modules/submissions/submission.service';
import { UsersInClassEntity } from 'src/modules/users-in-class/users-in-class.entity';
import { UsersInClassService } from 'src/modules/users-in-class/users-in-class.service';
import { UserEntity } from 'src/modules/users/user.entity';
import { UserService } from 'src/modules/users/user.service';
import { BeanManagementService } from './bean-management.service';

@Global()
@Module({
    imports:[
        TypeOrmModule.forFeature([
            UserEntity,
            ClassEntity,
            AssignmentEntity,
            PostEntity,
            UsersInClassEntity,
            AssigneeEntity,
            SubmissionEntity,
        ])
    ],
    providers:[
        BeanManagementService,
        UserService,
        ClassService,
        AssignmentService,
        PostService,
        UsersInClassService,
        AssigneeService,
        SubmisssionService,
    ],
    exports:[
        BeanManagementService,
        UserService,
        ClassService,
        AssignmentService,
        PostService,
        UsersInClassService,
        AssigneeService,
        SubmisssionService,
    ]
})
export class ServiceModule {
}
