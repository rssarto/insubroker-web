import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({providedIn: 'root'})
export class LogService {

  log(message: any, ...objects: any[]) {
    this.debug(message + (objects !== undefined ? ':' : ''));
    if ( objects !== undefined ) {
      objects.forEach(value => this.debug(value));
    }
  }

  debug(message: any) {
    if (!environment.production) {
      console.log(message);
    }
  }
}
