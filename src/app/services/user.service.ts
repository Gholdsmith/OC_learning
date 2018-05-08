import { User } from '../models/User.model';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private users: User[] = [];
    userSubject = new Subject<User[]>();

    constructor(private httpClient: HttpClient) { }

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
        this.httpClient.put('https://oc-learning.firebaseio.com/users.json', this.users)
            .subscribe(
                () => {
                    console.log('Users enregistées avec succès');
                },
                (error) => {
                    console.log('une erreur à été rencontrée');
                });
    }

    getUsers() {
        this.httpClient.get<any[]>('https://oc-learning.firebaseio.com/users.json')
            .subscribe(
                (response) => {
                    this.users = response;
                    this.emitUsers();
                    console.log('Chargement des users réussi');
                },
                (error) => {
                    console.log('erruer lors du chargment des users');
                });
    }
}
