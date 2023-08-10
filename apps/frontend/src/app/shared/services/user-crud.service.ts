import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UserCRUDService {
  // localUri = 'http://localhost:3000/api';
  localUri = 'https://e-one-admin-api-61d02f9b3e98.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  public allUsers = toSignal(this.http.get<any[]>(`${this.localUri}/user`));

  getAll() {
    return this.http.get<any[]>(`${this.localUri}/user`);
  }

  getById(id: string) {
    return this.http.get<any>(`${this.localUri}/user/${id}`);
  }

  createUser(user: any) {
    console.log(user);
    return this.http.post<any>(`${this.localUri}/user`, user);
  }

  updateUser(id: string, user: any) {
    const httpParams = new HttpParams().set('id', id);
    return this.http.put<any>(`${this.localUri}/user/`, user, {
      params: httpParams,
    });
  }

  deleteOne(id: string) {
    const params = new HttpParams().set('id', id);
    return this.http.delete<any>(`${this.localUri}/user/${id}`, {
      params,
    });
  }
}
