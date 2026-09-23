# Landing Page — R&M Higienizações

Landing page estática em HTML, CSS e JavaScript para higienização e impermeabilização de estofados em Santa Maria/RS. Derivada do Business Template Sandy. Primeiro marco: conteúdo inicial para revisão interna; não é versão homologada nem publicação de produção.

## Executar localmente

Abra `index.html` em um navegador ou rode um servidor estático:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000/`. O conteúdo do negócio está em `config.js`; textos estruturais da página estão em `index.html`.

## Estado do conteúdo

- Seis serviços, WhatsApp `(55) 99242-2442`, Instagram `@higienizacao.rem`, horários, pagamentos e área atendida foram transcritos do briefing.
- A identidade usa azul e branco, com o logotipo raster fornecido e fundo branco preservado. Hero e seção "Quem somos" usam variantes WebP de duas fotos reais do lote recebido, com `srcset` e dimensões explícitas.
- `gallery`, `testimonials` e `equipment` mantêm conteúdo de placeholder/mock, mas continuam desativados pelos controles de `sections`. `beforeAfter` está habilitado com os comparativos fornecidos de sofá e colchão; `finalCta` está desativado.
- `deployment.environment: "preview"`, `allowIndexing: false` e `<meta name="robots" content="noindex, nofollow">` impedem a indexação intencional desta versão.
- Nenhum domínio, GTM ou analytics de cliente foi configurado.

## Pendências para a homologação

1. Validar com a R&M a autorização de publicação das fotos e do logotipo. A galeria continua desativada.
2. Validar com a R&M a redação dos serviços, horário, formas de pagamento, contato e processo de orçamento.
3. Confirmar depoimentos e avaliação do Google antes de habilitar prova social.
4. Testar links e responsividade; definir domínio e hospedagem no acordo comercial.
5. Somente na produção, atualizar os metadados estáticos do `index.html`, `deployment.productionUrl`, `allowIndexing`, imagem social, `robots.txt` e `sitemap.xml` para o domínio aprovado.

O repositório guarda o código. O projeto e as decisões comerciais estão no Notion da Assolin Tecnologia.
