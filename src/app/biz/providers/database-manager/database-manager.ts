import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the DatabaseManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseManagerProvider {

  constructor(private afDb: AngularFireDatabase) {
  }

  users() {
    return this.afDb.list('users');
  }

}
