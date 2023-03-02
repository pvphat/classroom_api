import { IsDate, IsDecimal, IsString } from "class-validator";

export class AssignmentDto {
    @IsString()
    title: string;

    @IsString()
    instruction: string;

    @IsString()
    attachment: string;

    @IsDecimal()
    max_point?: number;

    @IsDate()
    due_date?: Date;
}