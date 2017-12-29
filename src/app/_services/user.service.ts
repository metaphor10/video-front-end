import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api2/users');
    }

    getById(id: number) {
        return this.http.get('/api2/users/' + id);
    }

    create(user: User) {
        return this.http.post('/api2/signup', user);
    }

    update(user: User) {
        return this.http.put('/api2/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}
