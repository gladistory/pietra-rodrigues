import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-guia',
  imports: [],
  templateUrl: './guia.component.html',
  styleUrl: './guia.component.css'
})
export class GuiaComponent {

  @ViewChild('sessao') sessao!: ElementRef;
  @ViewChild('buy') buy!: ElementRef;

  private botToken = '7749849814:AAHC3ELLSm5M2_7D8QR-Pl-3rjVI3aaX1H4';
  private chatId = '7569630088';

  constructor(private http: HttpClient) { }

  notificarCompra() {
    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
    const body = {
      chat_id: this.chatId,
      text: '🛒 Alguém clicou no botão COMPRAR no site!'
    };

    this.http.post(url, body).subscribe({
      next: () => console.log('Notificação enviada com sucesso!'),
      error: (err) => console.error('Erro ao enviar notificação:', err)
    });
  }

  scrollToSection() {
    this.sessao.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToSectionbuy() {
    this.buy.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


}
