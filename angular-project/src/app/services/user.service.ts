import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): User[] {
    return [
      new User('Ivan', 55),
      new User('Petya', 85),
      new User('Galya', 33),
      new User('Fedor', 56),
    ];
  }

  constructor() {}
}
