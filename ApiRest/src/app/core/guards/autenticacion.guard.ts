import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UsuarioService } from 'src/app/login/services/usuario.service';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
   
  constructor(
    private sesion: SesionService,
    private usuario: UsuarioService,
    private router: Router
  ) { }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.sesionActiva && sesion.usuarioActivo?.admin === true){
            return true;
          }else{
            this.router.navigate(['/login']);
            return false;
          }
        })
      );
  
}
}
