
import { Component } from '@angular/core';


import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alinhamento',
  imports: [CommonModule],
  templateUrl: './alinhamento.component.html',
  styleUrl: './alinhamento.component.css'
})

export class AlinhamentoComponent {
  faqs = [
    {
      question: 'Para quem é este guia?',
      answer: 'Este guia é para concurseiros que estão na fase pós-edital e precisam de um método estratégico para organizar seus estudos com pouco tempo disponível. Se você deseja foco, clareza e objetividade na reta final, este material é para você!',
      open: false
    },
    {
      question: 'Como receberei o guia após a compra?',
      answer: 'Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download do guia em formato PDF. Você pode acessar de qualquer dispositivo e imprimir se desejar.',
      open: false
    },
    {
      question: 'E se eu não gostar do guia?',
      answer: 'Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, basta nos enviar um e-mail que devolveremos 100% do seu investimento, sem burocracia.',
      open: false
    },
    {
      question: 'Posso usar este guia para qualquer concurso?',
      answer: 'Sim! O método ensinado no guia é adaptável para qualquer concurso público, independente da área ou nível (médio, superior). As técnicas de priorização, organização e estudo são universais.',
      open: false
    },
    {
      question: 'O guia substitui o material de estudo das matérias?',
      answer: 'Não. Este é um guia de estratégia e organização, não contém conteúdo específico de disciplinas. Ele vai te ensinar como estudar de forma eficiente com o material que você já possui.',
      open: false
    }
  ];

  toggleAnswer(index: number) {
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false;
    });
  }
}
