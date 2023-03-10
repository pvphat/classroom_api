import { IsDate, IsDecimal, IsNotEmpty, IsString } from "class-validator";

export class AssignmentDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    instruction: string;

    @IsString()
    attachment: string;

    @IsDecimal()
    @IsNotEmpty()
    max_point?: number;

    @IsDate()
    @IsNotEmpty()
    due_date?: Date;

    @IsString()
    @IsNotEmpty()
    class_id: string;
}