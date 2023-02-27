import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  paginate():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:9090/api/users/list')
  }
  create(user:User):Observable<User>{
    return this.http.post<User>('http://localhost:9090/api/users',user);
  }
  get(id:number):Observable<User>{
    return this.http.get<User>(`http://localhost:9090/api/users/${id}`);
  }
  update(id:number,user:User){
    return this.http.put<User>(`http://localhost:9090/api/users/${id}`,user);
  }
  delete(id:number){

  }

}
