import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aceitou = false;
  estiloBotaoNao = { position: 'static', top: 'auto', left: 'auto' };

  constructor(private http: HttpClient) {}

  fugir() {
    // Calcula uma posição aleatória na tela, mantendo o botão visível
    const maxLargura = window.innerWidth - 100;
    const maxAltura = window.innerHeight - 50;
    
    const x = Math.floor(Math.random() * maxLargura);
    const y = Math.floor(Math.random() * maxAltura);

    this.estiloBotaoNao = {
      position: 'fixed',
      top: `${y}px`,
      left: `${x}px`
    };
  }

  dizerSim() {
    this.aceitou = true;
    // Envia a confirmação para o servidor Python
    this.http.post('https://pedido-angela.onrender.com/api/aceitou', {}).subscribe({
      next: (resposta) => console.log('Salvo no Python:', resposta),
      error: (erro) => console.error('Erro na API:', erro)
    });
  }
}