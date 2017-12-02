import { Component } from '@angular/core';

/**
 * Generated class for the MainTabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'main-tab',
  templateUrl: 'main-tab.html'
})
export class MainTabComponent {

  text: string;
  
  constructor() {
    console.log('Hello MainTabComponent Component');
    this.text = 'Hello World';
  }

}
