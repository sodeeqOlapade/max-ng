import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { GetCharactersDto } from './dto/get-characters.dto';
import { GetMoviesDto } from './dto/get-movies.dto';
import { customResponse, ICustomResponse } from './utils/response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("movies")
  @ApiResponse({ status: HttpStatus.OK, type: GetMoviesDto, description: "Movies successfully retrieved!" })
  async getMovies(): Promise<ICustomResponse> {
    const movies =  await this.appService.getMovies();
    return customResponse(HttpStatus.OK, "Successful", {
      count: movies.length,
      movies: movies.map(movie => new GetMoviesDto(movie))
    })
  }

  @Get("characters")
  @ApiResponse({ status: HttpStatus.OK, type: GetCharactersDto, description: "Characters successfully retrieved!" })
  async getCharacters(): Promise<ICustomResponse> {
    const characters =  await this.appService.getCharacters();
    // console.log(characters)
    return customResponse(HttpStatus.OK, "Successful", {
      count: characters.length,
      characters: characters.map(character => new GetCharactersDto(character)),
    })
  }
}
