import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<any>=[]

  constructor(private http:HttpClient) { }
  addUser(data:any){
    return this.http.post(`https://60ca0d48772a7600172052bb.mockapi.io/user`,data)
  }
  returnUser(){
    return this.http.get(`https://60ca0d48772a7600172052bb.mockapi.io/user`)
  }
  returnUserById(id:number){
    return this.http.get(`https://60ca0d48772a7600172052bb.mockapi.io/user/${id}`)
  }
  updateUserById(id:any,data:any){
    return this.http.put(`https://60ca0d48772a7600172052bb.mockapi.io/user/${id}`,data)
  }
  deleteById(id:any){
    return this.http.delete(`https://60ca0d48772a7600172052bb.mockapi.io/user/${id}`)
  }
}
