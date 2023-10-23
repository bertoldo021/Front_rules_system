import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {
    tipoSolo: string = ''; // Alterado para string
    calcio: number = 0; // Alterado para number
    materiaOrganica: number = 0; // Alterado para number
    fosforo: string = ''; // Alterado para string
    potassio: string = ''; // Alterado para string
    calcioCmolcDm3: number = 0; // Alterado para number
    magnesioCmolcDm3: number = 0; // Alterado para number
    tipoForrageira: string = ''; // Alterado para string
    cultura: string = ''; // Alterado para string
    primeiroPlantio: string = ''; // Alterado para string
    objetivo: string = ''; // Alterado para string
  
  mensagemDeSucesso: string = '';

  @ViewChild('testeDiv', { static: false }) testeDiv: ElementRef | undefined;

  constructor() {
    // Inicialize as propriedades conforme necessário
  }

  submitForm(event: Event) {
    event.preventDefault();
    // Lógica para processar o envio do formulário
    // Após o envio bem-sucedido, atualize a mensagem de sucesso e exiba-a no elemento #testeDiv
    this.mensagemDeSucesso = 'Teste sucesso';
    if (this.testeDiv) {
      this.testeDiv.nativeElement.textContent = this.mensagemDeSucesso;
    }
  }
}
