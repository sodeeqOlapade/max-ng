import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { GetMoviesDto } from './dto/get-movies.dto';
import { customResponse, ICustomResponse } from './utils/response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("movies")
  @ApiResponse({ status: HttpStatus.OK, type: GetMoviesDto, description: "Movies successfully retrieved!" })
  async getMovies(): Promise<ICustomResponse> {
    const movies =  await this.appService.getMovies();
    return customResponse(HttpStatus.OK, "Successful", movies.map(movie => new GetMoviesDto(movie)))
  }
}
