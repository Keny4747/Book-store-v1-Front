import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserPage } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  paginate(size:number=8,page:number=0):Observable<UserPage>{
    let params = new HttpParams();
    params = params.append('size',size);
    params = params.append('page',page);
    params = params.append('sort','firstName');
    return this.http.get<UserPage>('http://localhost:9090/api/users',{params})
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
    return this.http.delete(`http://localhost:9090/api/users/${id}`);
  }

}
