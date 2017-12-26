import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ChatManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatManagerProvider {

  constructor(private http: HttpClient) {
    console.log('Hello ChatManagerProvider Provider');
  }

}
