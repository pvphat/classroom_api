import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "src/modules/users/user.entity";
import { ClassEntity } from "src/modules/classes/class.entity";
import { UsersInClassEntity } from "src/modules/users-in-class/users-in-class.entity";
import { AssignmentEntity } from "src/modules/assignments/assigment.entity";
import { AssigneeEntity } from "src/modules/assignees/assignee.entity";
import { SubmissionEntity } from "src/modules/submissions/submission.entity";
import { PostEntity } from "src/modules/posts/post.entity";

@Injectable()
export class BeanManagementService {
    
    public constructor(
        @InjectRepository(UserEntity) public readonly user: Repository<UserEntity>,
        @InjectRepository(ClassEntity) public readonly classes: Repository<ClassEntity>,
        @InjectRepository(UsersInClassEntity) public readonly usersInClass: Repository<UsersInClassEntity>,
        @InjectRepository(AssignmentEntity) public readonly assignment: Repository<AssignmentEntity>,
        @InjectRepository(AssigneeEntity) public readonly assignee: Repository<AssigneeEntity>,
        @InjectRepository(SubmissionEntity) public readonly submission: Repository<SubmissionEntity>,
        @InjectRepository(PostEntity) public readonly post: Repository<PostEntity>
    ){}
    
    
}

