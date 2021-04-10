import { ApiProperty } from "@nestjs/swagger";

export class GetCommentDto {

  constructor(data: any){
    this.id = data.id;
    this.body = data.body;
    this.commenterIpAddress = data.commenterIpAddress;
  }

    @ApiProperty({
        name: "id",
        type: String,
        description: "Comment's Id",
      })
    id: string;


    @ApiProperty({
        name: "body",
        type: String,
        description: "Comment's body",
      })
    body: string;

    @ApiProperty({
      name: "commenterIpAddress",
      type: String,
      description: "Commenter's IP address",
    })
    commenterIpAddress: string;

}