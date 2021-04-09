import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ICharacter } from './models/characters.interface';
import { IMovies } from './models/movies.interface';
@Injectable()
export class AppService {

  BASE_URL: string = "https://swapi.dev/api/";


  async getMovies(): Promise<IMovies[]> {
    try {
      const requestUrl = `${this.BASE_URL}films/`
      const response = await axios.get(requestUrl);
      return response.data.results.sort(function(a, b) {
        return new Date(b.release_date).valueOf() - new Date(a.release_date).valueOf();
      });
    } catch (error) {
      console.error(error);
    }
  }


  async getCharacters(): Promise<ICharacter[]> {
    try {
      const requestUrl = `${this.BASE_URL}people/`
      const response = await axios.get(requestUrl);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}
