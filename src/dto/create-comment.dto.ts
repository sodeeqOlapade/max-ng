import { ApiProperty } from "@nestjs/swagger";
import { IsString, Min, Max } from "class-validator";

export class CreateCommentDto {

    @ApiProperty({
      name: "body",
      type: String,
      description: "Comment body",
      required: true,
    })
    @IsString()
    @Min(2)
    @Max(500)
    body: string;

    @ApiProperty({
      name: "commenterIpAddress",
      type: String,
      description: "Commenter's IP address",
      required: true,
    })
    @IsString()
    commenterIpAddress: string;

}