import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../models/User';

@Injectable()
export class UserService {
  users:User[]

  constructor() {
    this.users = [
      {
        firstName: "Harriet",
        lastName: "Tubman",
        email: 'tubman@email.com',
        isActive: true,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "Harper",
        lastName: "Lee",
        email: 'hLee@email.com',
        isActive: false,
        registered: new Date("01/11/2017 06:30:00"),
        hide: true
      },
      {
        firstName: "Fannie",
        lastName: "Flagg",
        email: 'fFlagg@email.com',
        isActive: true,
        registered: new Date("08/08/2016 10:30:00"),
        hide: true
      }
    ];
   }

   //This will return Users as Observable that can be subscribed to
   getUsers(): Observable<User[]>{
      return of(this.users);
   }

   addUser(user: User){
     this.users.unshift(user);
   }

}
