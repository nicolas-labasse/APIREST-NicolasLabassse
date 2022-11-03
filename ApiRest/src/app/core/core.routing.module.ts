import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AutenticacionGuard } from "./guards/autenticacion.guard";



    const routes: Routes = [
 {
    path:'inicio', component: HomeComponent, canActivate: [AutenticacionGuard]
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
export class CoreRoutingModule { }
