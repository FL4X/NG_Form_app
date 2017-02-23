import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class FirebaseService {

  constructor(private http:Http) {
    console.log('Firebase Ready');;
  }

  postUsers(user:any) {
    const body = JSON.stringify(user);
    return this.http.post('https://model-driven-app.firebaseio.com/data.json', body).map((data:Response) => data.json());
  }

  getUsers() {
    return this.http.get('https://model-driven-app.firebaseio.com/data.json').map((data:Response) => data.json());
  }
}
