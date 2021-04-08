import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IMovies } from './models/movies.interface';
@Injectable()
export class AppService {
  async getMovies(): Promise<IMovies[]> {
    try {
      const requestUrl = "https://swapi.dev/api/films/"
      const response = await axios.get(requestUrl);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}
