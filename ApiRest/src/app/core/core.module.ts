import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesionService } from './services/sesion.service';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    SesionService
  ],
  exports: [
    HomeComponent
  ]
})
export class CoreModule { }
