import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ="https://localhost:7276/api/User/"
  constructor( private http : HttpClient) { }


  registrar(userObj : any){

     return this.http.post<any>(`${this.baseUrl}registro`, userObj)

  }
  
  login(loginObj : any){

     return this.http.post<any>(`${this.baseUrl}autenticador`, loginObj)
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){

    return localStorage.getItem('token')
  }
  
  estaLogado():boolean{
    return !!localStorage.getItem('token')
    
  }  
  

}
