import { DashbordComponent } from './views/dashbord/dashbord.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
{ path: 'recommendation', loadChildren: () => import('./recommendation/recommendation.module').then(m => m.RecommendationModule) },


  {
    path: '',
    redirectTo: 'dashbord',
    pathMatch: "full"
  },
  {
    path: 'dashbord',
    component: DashbordComponent,


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
