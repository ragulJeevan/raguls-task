import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUsers(){

    return this.http.get('https://jsonplaceholder.typicode.com/users')
   /* const users=[
      {userId:10,userName:'Youtube'},
      {userId:33,userName:'Favebook'},
      {userId:41,userName:'Instagram'},
      {userId:45,userName:'Whatsapp'},
    ];
    return users;*/
  }
}
