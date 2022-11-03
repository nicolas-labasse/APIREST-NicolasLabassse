import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from 'src/app/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  constructor(
    private http : HttpClient,
  ) { 

  }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>('https://6362c37466f75177ea37a715.mockapi.io/curso');
  }

}
