import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutenticacionGuard } from "../core/guards/autenticacion.guard";
import { ListaCursoComponent } from "./components/lista-curso/lista-curso.component";



    const routes: Routes = [
       
        {
            path: 'curso', component: ListaCursoComponent ,canActivate: [AutenticacionGuard]
        }
      
        
            
    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CursoRoutinModule { }
