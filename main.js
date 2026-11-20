// Comportamento da landing page. Sem dependências externas.

(function () {
  'use strict';

  var animacaoReduzida = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Acordeão (tópicos do guia e dúvidas frequentes) ----------------------
  document.querySelectorAll('[data-acordeao] .acordeao__gatilho').forEach(function (gatilho) {
    gatilho.addEventListener('click', function () {
      var item = gatilho.closest('.acordeao__item');
      var aberto = gatilho.getAttribute('aria-expanded') === 'true';
      gatilho.setAttribute('aria-expanded', String(!aberto));
      item.classList.toggle('acordeao__item--aberto', !aberto);
    });
  });

  // --- Scroll suave: qualquer elemento com data-scroll="#alvo" ---------------
  document.querySelectorAll('[data-scroll]').forEach(function (el) {
    el.addEventListener('click', function () {
      var alvo = document.querySelector(el.getAttribute('data-scroll'));
      if (alvo) {
        alvo.scrollIntoView({ behavior: animacaoReduzida ? 'auto' : 'smooth' });
      }
    });
  });

  // --- Ano do rodapé --------------------------------------------------------
  document.querySelectorAll('[data-ano]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // --- Notificação de clique no botão de compra (Telegram) -------------------
  // ATENÇÃO: o token fica visível no código-fonte da página (já era assim na
  // versão Angular). Para protegê-lo, é preciso mover esta chamada para um
  // backend/função serverless.
  var BOT_TOKEN = '7749849814:AAHC3ELLSm5M2_7D8QR-Pl-3rjVI3aaX1H4';
  var CHAT_ID = '7569630088';

  var btnComprar = document.getElementById('btn-comprar');

  if (btnComprar) {
    btnComprar.addEventListener('click', function () {
      // keepalive: mantém a requisição viva mesmo com a navegação para a Kiwify
      // acontecendo em seguida (sem isso o browser cancela o envio).
      fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage', {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: '🛒 Alguém clicou no botão COMPRAR DEC no site!'
        })
      }).catch(function (err) {
        console.error('Erro ao enviar notificação:', err);
      });
    });
  }
})();
