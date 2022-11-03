import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { LoginComponent } from './login/components/login/login.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./login/login.routing.module').then(m => m.LoginRoutingModule)
  },

  {
    path: '', loadChildren: () => import('./core/core.routing.module').then(m => m.CoreRoutingModule)
  },

  {
    path: '', loadChildren: () => import('./cursos/curso.routing.module').then(m => m.CursoRoutinModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
