import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({providedIn: 'root'})
export class LogService {

  log(message: any) {
    this.debug(message);
  }

  debug(message: any) {
    if (!environment.production) {
      console.log(message);
    }
  }
}
