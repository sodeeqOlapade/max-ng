import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { GetMoviesDto } from './dto/get-movies.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("movies")
  @ApiResponse({ status: HttpStatus.OK, type: GetMoviesDto, description: "Movies successfully retrieved!" })
  getMovies(): string {
    return this.appService.getMovies();
  }
}
