import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {
  cursos$!: Observable<Curso[]>
  constructor(
    private cursosService: CursoService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
  }

}
