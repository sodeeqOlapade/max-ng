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
      const requestUrl = `${this.BASE_URL}people/`;
      let results = [];
      const response = await axios.get(requestUrl);
      let nextPage = 2;
      
      results = [...results, ...response.data.results];
      while(nextPage <= Math.ceil(response.data.count/response.data.results.length)){
        const newResponse = await axios.get(`${this.BASE_URL}people/?page=${nextPage}`);
        results = [...results, ...newResponse.data.results];
        console.log(results.length, newResponse.data.results.length)
        nextPage++;
      }
      return results;
    } catch (error) {
      console.error(error);
    }
  }
}
