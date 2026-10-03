# Landing Page — R&M Higienizações

Landing page estática em HTML, CSS e JavaScript para higienização e impermeabilização de estofados em Santa Maria/RS. Derivada do Business Template Sandy. Homologação visual e comercial informada pelo responsável pelo projeto; domínio oficial e publicação de produção ainda pendentes. Alterações posteriores precisam de nova conferência.

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
- O header não exibe atalho de WhatsApp e não há botão flutuante. Os contatos permanecem na primeira dobra, em "Como funciona", na área de atendimento, no FAQ, no CTA final quando habilitado e no rodapé.
- Links de contato usam `data-contact-type`, `data-contact-location` e `data-contact-label`. Quando `analytics.trackContactClicks` estiver habilitado, cada interação envia `contact_click` ao `dataLayer` com `contact_type`, `contact_location` e `contact_label` declarados no próprio link.
- `deployment.environment: "preview"`, `allowIndexing: false` e `<meta name="robots" content="noindex, nofollow">` impedem a indexação intencional desta versão.
- Integração GTM preparada no código com `GTM-T2FBJ9XF` e rastreamento de contatos ativado. Configuração das tags, publicação do contêiner e recebimento no GA4 ainda precisam ser verificados.

## Pendências para publicação e entrega

1. Validar com a R&M a autorização de publicação das fotos e do logotipo. A galeria continua desativada.
2. Vincular a evidência do aceite comercial informado e conferir alterações posteriores.
3. Depoimentos e avaliação do Google permanecem desativados por decisão de escopo; confirmar conteúdo real apenas se forem habilitados futuramente.
4. Testar links e responsividade; definir domínio e hospedagem no acordo comercial.
5. Somente na produção, atualizar os metadados estáticos do `index.html`, `deployment.productionUrl`, `allowIndexing`, imagem social, `robots.txt` e `sitemap.xml` para o domínio aprovado.

O repositório guarda o código. O projeto e as decisões comerciais estão no Notion da Assolin Tecnologia.

## Lote 2B — GTM e GA4

- Contêiner Web: `GTM-T2FBJ9XF`, centralizado em `analytics.gtmContainerId` no `config.js`.
- Fluxo GA4: `G-2H0KCZGJGW`, a configurar na Google tag dentro do GTM. Não há instalação direta de `gtag.js` no site.
- `config.js` carrega uma vez no início do head. O carregador valida o ID, inicializa o dataLayer e insere uma única requisição assíncrona ao GTM. O fallback noscript após a abertura do body usa o mesmo ID literal; sincronizá-lo se o contêiner mudar.
- `analytics.trackContactClicks: true` habilita o listener delegado existente. Bloqueio do GTM não deve impedir a navegação dos contatos.
- O site envia somente `contact_click`, com `contact_type`, `contact_location` e `contact_label`; as tags do GTM enviam os eventos específicos ao GA4.
- Valores reais dos contatos incluem `whatsapp` / `how_it_works`, `whatsapp` / `service_area` e `phone` / `footer`. Os filtros devem reproduzir exatamente esses valores.
- CTA final permanece desativado; galeria e depoimentos permanecem desativados; comparativos preservados.
- Após disponibilizar esta versão, validar no Tag Assistant um evento por clique e somente a tag correspondente, além do recebimento no DebugView do GA4. Testar também elementos internos dos links, FAQ gerado dinamicamente e navegação com analytics bloqueado.
- Código integrado não significa coleta validada. Domínio, DNS, SEO e configuração/publicação do contêiner não foram executados neste lote.
