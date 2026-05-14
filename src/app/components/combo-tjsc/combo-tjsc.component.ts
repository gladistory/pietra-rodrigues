import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
    selector: 'app-combo-tjsc',
    imports: [],
    templateUrl: './combo-tjsc.component.html',
    styleUrl: './combo-tjsc.component.css'
  })
 export class ComboTjscComponent {
    constructor(private http: HttpClient) { }

    /** Desce até a secção de oferta sem alterar o fragmento da URL. */
    navigateToOferta(event?: Event): void {
        event?.preventDefault();
        document
            .getElementById("oferta")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    private botToken = '7749849814:AAHC3ELLSm5M2_7D8QR-Pl-3rjVI3aaX1H4';
    private chatId = '7569630088';

    notificarCompra() {
        const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
        const body = {
          chat_id: this.chatId,
          text: '🛒 Alguém clicou no botão COMPRAR COMBO TJSC no site!'
        };
  
        this.http.post(url, body).subscribe({
          next: () => console.log('Notificação enviada com sucesso!'),
          error: (err) => console.error('Erro ao enviar notificação:', err)
        });
      }

    
  }