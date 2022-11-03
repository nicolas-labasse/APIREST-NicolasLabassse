import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
  private http : HttpClient

  ) { }


   login(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://6362c37466f75177ea37a715.mockapi.io/usuario');
  } 


  

}
