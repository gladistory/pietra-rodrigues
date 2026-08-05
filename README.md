# Site Mentoria — Método DEC

Landing page estática (HTML + CSS + JS), sem framework, sem build e sem
dependência de CDN além das fontes.
Publicada em https://piettra-rodrigues.com.br/

> Até agosto/2026 o projeto era uma aplicação Angular 19. A migração manteve
> apenas a página do guia; o código Angular continua disponível no histórico do
> git (commit anterior a esta migração).

## Estrutura

```
site/
├── index.html        ← a página inteira (única fonte da verdade)
├── styles.css        ← sistema visual da marca + componentes
├── main.js           ← acordeão, scroll suave, ano do rodapé, notificação de compra
├── CNAME             ← domínio personalizado do GitHub Pages
├── favicon.ico
├── logo-claro.png    ← logo PR sobre fundos escuros (cabeçalho e rodapé)
├── logo-roxo.png     ← mesma logo em roxo, para fundos claros
└── *.png / *.jpeg    ← imagens (caminhos absolutos: /bonus.png, ...)
```

## Identidade visual

Tudo sai das variáveis no topo de [site/styles.css](site/styles.css) — mudar a
marca é mudar ali, não nos componentes.

| Cor | Hex | Papel |
|---|---|---|
| Roxo | `#645470` | Autoridade — cabeçalho, títulos, CTAs primários |
| Lilás | `#bda2b6` | Acolhimento — seções motivacionais e depoimentos |
| Bege quente | `#bd9f83` | Apoio — ícones, bordas, traços decorativos |
| Marrom café | `#68513f` | Conquista — rodapé e CTA de compra |
| Off-white | `#f9f7ec` | Fundo geral (nunca branco puro) |
| Cinza | `#545454` | Texto de corpo (nunca preto puro) |

Tipografia (Google Fonts): **Montserrat 500** nos títulos, **Raleway 400** no
corpo, **Cormorant Garamond itálico** nas frases de destaque e no slogan.

Observações de uso:

- O bege puro sobre o off-white fica em ~2,3:1 de contraste, abaixo do mínimo
  legível — em texto usa-se o marrom; o bege fica para ícones e traços.
- As lavagens `--color-lilas-wash` / `--color-beige-wash` são as cores da marca
  diluídas no off-white: é o que permite fundo de seção colorido mantendo o
  texto cinza legível.

## Rodar localmente

Os caminhos são absolutos (`/styles.css`, `/bonus.png`), então é preciso um
servidor HTTP — abrir o arquivo direto pelo `file://` não funciona.

```bash
python -m http.server 8080 --directory site
```

Depois abra http://localhost:8080/

Para testar também a rota `/dec` (gerada no deploy), copie o index antes de subir
o servidor:

```bash
mkdir -p site/dec && cp site/index.html site/dec/index.html
```

Essa cópia é ignorada pelo git.

## Deploy

Automático: qualquer push em `master` dispara
[.github/workflows/deploy-github-pages.yml](.github/workflows/deploy-github-pages.yml),
que copia `index.html` para `dec/index.html` e `404.html` e publica a pasta
`site/` no branch `gh-pages`. Não há instalação de dependências nem build.

## Dependências externas

- Google Fonts (Montserrat, Raleway, Cormorant Garamond)
- Meta Pixel (2 IDs) e player do YouTube

## Pontos de atenção

- Toda `<img>` precisa de `width` e `height`: sem isso o espaço não é reservado
  antes do carregamento, a página cresce durante o scroll e os botões de CTA
  erram o alvo.
- O token do bot do Telegram em [site/main.js](site/main.js) fica visível no
  código-fonte da página. Para protegê-lo é preciso mover a chamada para um
  backend/função serverless.
- As rotas antigas `/alinhamento` e `/combo-tjsc` deixaram de existir.
