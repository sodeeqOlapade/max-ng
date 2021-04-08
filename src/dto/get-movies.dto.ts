import { ApiProperty } from "@nestjs/swagger";

export class GetMoviesDto {

  constructor(data: any){
    this.episodeId = data.episode_id;
    this.title = data.title;
    this.openingCrawl = data.opening_crawl;
    this.commentCount = data.commentCount;

  }

    @ApiProperty({
        name: "episodeId",
        type: String,
        description: "episode's Id",
    })
    episodeId: string;

    @ApiProperty({
        name: "title",
        type: String,
        description: "Movie's title",
      })
    title: string;

    @ApiProperty({
      name: "openingCrawl",
      type: String,
      description: "Movie's opening crawl",
    })
    openingCrawl: string;

    @ApiProperty({
      name: "commentCount",
      type: String,
      description: "Movies comment count",
    })
    commentCount: string;
}
