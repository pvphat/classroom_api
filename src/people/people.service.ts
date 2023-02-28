import { Injectable } from "@nestjs/common";

@Injectable()
export class PeopleService {
    async HelloWorld() {
        return "Hello world";
    }
}