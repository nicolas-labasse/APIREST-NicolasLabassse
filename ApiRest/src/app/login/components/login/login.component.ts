import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private router: Router,
    private sesionService: SesionService
  ) { 

    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      password: new FormControl(''),
      admin: new FormControl(''),
    });
  }

  ngOnInit(): void {

   
  }

  login(){
    console.log(this.formulario.value);
    this.sesionService.login(this.formulario.value.usuario, this.formulario.value.contrasena, this.formulario.value.admin);
    this.router.navigate(['curso']);
  }





}