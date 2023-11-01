import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component'; // Importe o componente AboutComponent
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutComponent }, // Configure a rota para o componente AboutComponent
];

@NgModule({
  declarations: [AboutComponent], // Declare o componente AboutComponent
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Configure as rotas aqui
  ],
})
export class AboutModule { }
