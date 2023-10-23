import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importe o componente associado à rota "recommendation"
import { RecommendationComponent } from './recommendation.component'; // Certifique-se de que este seja o nome correto do seu componente

@NgModule({
  declarations: [RecommendationComponent], // Adicione o componente ao módulo
  imports: [
    CommonModule,
    RouterModule.forChild([
      // Defina a rota "recommendation" e associe-a ao componente
      {
        path: '',
        component: RecommendationComponent
      }
    ])
  ]
})
export class RecommendationModule {}
