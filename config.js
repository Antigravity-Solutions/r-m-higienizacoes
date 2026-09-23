/**
 * CONTEÚDO DA R&M HIGIENIZAÇÕES - PREVIEW
 * 
 * Altere os valores abaixo para personalizar o site para um novo cliente.
 * Não é necessário mexer nos arquivos HTML, CSS ou JS.
 */

const siteConfig = {
  // Preview não deve ser indexado. Configure produção somente após definir domínio e conteúdo final.
  deployment: {
    environment: "preview",
    productionUrl: "",
    allowIndexing: false
  },

  // Eventos locais de intenção de contato; habilite apenas se houver plano de mensuração.
  analytics: { trackContactClicks: false },

  // Seções opcionais: os conteúdos mock permanecem no arquivo mesmo quando ocultos.
  sections: {
    gallery: false,
    testimonials: false,
    beforeAfter: true,
    equipment: false,
    finalCta: false
  },

  // Configuração da navegação principal do header
  navigation: [
    { label: "Início", target: "inicio" },
    { label: "Serviços", target: "servicos" },
    { label: "Sobre", target: "quem-somos" },
    { label: "Dúvidas", target: "faq" },
    { label: "Contato", target: "contato" }
  ],

  // Dados fundamentais da empresa
  business: {
    name: "R&M Higienizações",
    segment: "Higienização de Estofados",
    slogan: "Cuidado profissional com os seus estofados, no conforto da sua casa.",
    city: "Santa Maria - RS",
    region: "Santa Maria/RS",
    phonePrimary: "(55) 99242-2442",
    phonePrimaryRaw: "5555992422442",
    whatsappRaw: "5555992422442",
    whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar um orçamento para meu estofado.",
    instagram: "@higienizacao.rem",
    instagramUrl: "https://www.instagram.com/higienizacao.rem/"
  },

  // Configurações de Localização e Mapa
  location: {
    title: "Atendimento a domicílio em Santa Maria/RS",
    description: "Atendemos todos os bairros de Santa Maria. Cidades da região sob consulta e conforme disponibilidade da equipe.",
    coverage: ["Todos os bairros de Santa Maria/RS", "Cidades da região sob consulta e disponibilidade"],
    address: "",
    mapsEmbedUrl: "",
    mapsExternalUrl: ""
  },

  // Tema de Cores do Site (Opcional)
  // Caso queira mudar a paleta do site de acordo com a marca do cliente
  theme: {
    primary: "#123a87",
    secondary: "#2366b4",
    accent: "#69b5e4",
    whatsapp: "#25d366"
  },

  // Configurações de SEO da Página
  seo: {
    title: "Higienização de Estofados em Santa Maria | R&M Higienizações",
    description: "Higienização e impermeabilização de estofados em Santa Maria/RS, com atendimento a domicílio e horário agendado. Solicite um orçamento à R&M.",
    keywords: "higienização de sofás, impermeabilização de sofás, higienização de colchões, Santa Maria RS",
    shareImage: ""
  },

  // Conteúdo da Seção Hero (Topo da Página)
  hero: {
    showPhoneButton: false,
    showEmergencyCard: false,
    badges: ["Atendimento a domicílio", "Horários agendados"],
    title: "Higienização profissional de estofados em Santa Maria, no conforto da sua casa",
    subtitle: "Cuidado para os estofados da sua casa e do seu veículo.",
    description: "Higienização e impermeabilização de sofás, além de higienização de colchões, cadeiras, poltronas e bancos automotivos. Consulte a disponibilidade da equipe.",
    image: "assets/img/rm-10-sofa-cinza-frontal-960w.webp",
    imageSrcSet: "assets/img/rm-10-sofa-cinza-frontal-480w.webp 480w, assets/img/rm-10-sofa-cinza-frontal-960w.webp 960w, assets/img/rm-10-sofa-cinza-frontal-1440w.webp 1440w",
    imageSizes: "(max-width: 767px) 100vw, 50vw",
    imageWidth: 960,
    imageHeight: 1280,
    imageAlt: "Sofá cinza junto à parede em ambiente residencial"
  },

  // Lista de Serviços Oferecidos
  // "featured: true" destaca o card no layout (estilo "Mais Procurado")
  services: [
    {
      title: "Higienização de sofás",
      description: "Cuidado profissional com sofás de diferentes modelos e tamanhos.",
      featured: true
    },
    {
      title: "Impermeabilização de sofás",
      description: "Aplicação de produto para auxiliar na conservação do tecido, conforme avaliação.",
      featured: false
    },
    {
      title: "Higienização de colchões",
      description: "Atendimento no local agendado, sem precisar transportar o colchão.",
      featured: false
    },
    {
      title: "Higienização de cadeiras",
      description: "Limpeza de cadeiras estofadas em geral.",
      featured: false
    },
    {
      title: "Higienização de bancos automotivos",
      description: "Cuidado com os estofados do veículo, sob consulta.",
      featured: false
    },
    {
      title: "Higienização de poltronas",
      description: "Atendimento para diferentes tipos de poltrona.",
      featured: false
    }
  ],

  // Diferenciais / Por que escolher
  trustItems: [
    {
      title: "Atendimento personalizado",
      description: "Orientação conforme a necessidade de cada cliente."
    },
    {
      title: "Equipamentos profissionais",
      description: "Ferramentas adequadas aos serviços de higienização."
    },
    {
      title: "Produtos de qualidade",
      description: "Produtos selecionados para a execução do serviço."
    },
    {
      title: "Atendimento a domicílio",
      description: "Todos os bairros de Santa Maria/RS."
    },
    {
      title: "Pontualidade",
      description: "Horários combinados com a equipe."
    },
    {
      title: "Dois anos de atuação",
      description: "Experiência no atendimento a estofados em Santa Maria."
    }
  ],

  // Substitua os placeholders por fotos autorizadas antes de habilitar sections.gallery.
  gallery: [
    {
      label: "Foto de serviço realizado — exemplo 1",
      image: ""
    },
    {
      label: "Foto de serviço realizado — exemplo 2",
      image: ""
    },
    {
      label: "Foto de serviço realizado — exemplo 3",
      image: ""
    }
  ],

  // Substitua os mocks por depoimentos reais e autorizados antes de habilitar sections.testimonials.
  testimonials: [
    {
      name: "Cliente — exemplo",
      city: "Santa Maria/RS",
      text: "Adicionar aqui um depoimento real e autorizado.",
      rating: 5
    },
    {
      name: "Cliente — exemplo",
      city: "Santa Maria/RS",
      text: "Adicionar aqui outro depoimento real e autorizado.",
      rating: 5
    }
  ],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      question: "Como solicito um orçamento?",
      answer: "Fale com a R&M pelo WhatsApp e, se possível, envie uma foto do estofado para explicar o que precisa."
    },
    {
      question: "O atendimento é a domicílio?",
      answer: "Sim, em Santa Maria/RS, com horário agendado. Para outras cidades da região, consulte a disponibilidade da equipe."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Dinheiro, Pix, cartão de débito e cartão de crédito."
    },
    {
      question: "Qual é o horário de atendimento?",
      answer: "De segunda a sábado, das 9h às 18h. Outros horários dependem da disponibilidade da equipe."
    }
  ],

  trustBar: [
    "Atendimento a domicílio",
    "Horários agendados",
    "Santa Maria/RS",
    "Higienização e impermeabilização"
  ],

  // Comparativos exigem duas fotos do mesmo atendimento e contexto confirmado.
  beforeAfter: [
    {
      title: "Higienização de sofá",
      description: "Resultado da higienização de um sofá bege.",
      beforeImage: "assets/img/rm-08-sofa-bege-manchas-1080w.webp",
      beforeImageSrcSet: "assets/img/rm-08-sofa-bege-manchas-480w.webp 480w, assets/img/rm-08-sofa-bege-manchas-960w.webp 960w, assets/img/rm-08-sofa-bege-manchas-1080w.webp 1080w",
      beforeImageWidth: 1080,
      beforeImageHeight: 1920,
      beforeAlt: "Sofá bege com manchas antes da higienização",
      afterImage: "assets/img/rm-09-sofa-bege-vista-1080w.webp",
      afterImageSrcSet: "assets/img/rm-09-sofa-bege-vista-480w.webp 480w, assets/img/rm-09-sofa-bege-vista-960w.webp 960w, assets/img/rm-09-sofa-bege-vista-1080w.webp 1080w",
      afterImageWidth: 1080,
      afterImageHeight: 1920,
      afterAlt: "Sofá bege depois da higienização",
      imageSizes: "(max-width: 767px) calc(100vw - 40px), 570px"
    },
    {
      title: "Higienização de colchões",
      description: "Resultado da higienização de um colchão.",
      beforeImage: "assets/img/rm-04-colchao-visao-quarto-900w.webp",
      beforeImageSrcSet: "assets/img/rm-04-colchao-visao-quarto-480w.webp 480w, assets/img/rm-04-colchao-visao-quarto-900w.webp 900w",
      beforeImageWidth: 900,
      beforeImageHeight: 1600,
      beforeAlt: "Colchão com sinais de uso antes da higienização",
      afterImage: "assets/img/rm-11-colchao-vista-diagonal-1201w.webp",
      afterImageSrcSet: "assets/img/rm-11-colchao-vista-diagonal-480w.webp 480w, assets/img/rm-11-colchao-vista-diagonal-960w.webp 960w, assets/img/rm-11-colchao-vista-diagonal-1201w.webp 1201w",
      afterImageWidth: 1201,
      afterImageHeight: 1600,
      afterAlt: "Colchão depois da higienização",
      imageSizes: "(max-width: 767px) calc(100vw - 40px), 570px"
    }
  ],

  about: {
    eyebrow: "Quem Somos",
    title: "R&M Higienizações em Santa Maria/RS",
    paragraphs: [
      "Há 2 anos, a R&M Higienizações atende Santa Maria/RS com serviços de higienização e impermeabilização de estofados.",
      "O atendimento é feito a domicílio, em horários agendados, com equipamentos profissionais e atenção aos detalhes."
    ],
    image: "assets/img/rm-01-colchao-e-equipamentos-960w.webp",
    imageSrcSet: "assets/img/rm-01-colchao-e-equipamentos-480w.webp 480w, assets/img/rm-01-colchao-e-equipamentos-960w.webp 960w, assets/img/rm-01-colchao-e-equipamentos-1440w.webp 1440w",
    imageSizes: "(max-width: 767px) 100vw, 50vw",
    imageWidth: 960,
    imageHeight: 1280,
    imageAlt: "Equipamento e produtos de higienização posicionados sobre um colchão"
  },

  // Substitua os mocks por informações confirmadas antes de habilitar sections.equipment.
  equipment: [
    {
      title: "Equipamento profissional — exemplo",
      description: "Adicionar uma descrição confirmada do equipamento utilizado no atendimento.",
      image: "",
      imageAlt: "Equipamento profissional utilizado na higienização"
    },
    {
      title: "Processo de higienização — exemplo",
      description: "Adicionar uma descrição confirmada desta etapa do processo de higienização.",
      image: "",
      imageAlt: "Etapa do processo profissional de higienização"
    }
  ],

  faqCta: {
    title: "Ainda ficou com dúvidas?",
    description: "Fale diretamente conosco e explique o que está acontecendo.",
    buttonText: "Conversar agora",
    whatsappMessage: "Olá, ainda tenho algumas dúvidas e gostaria de conversar."
  },

  finalCta: {
    title: "Vamos cuidar dos seus estofados?",
    description: "Fale com a R&M e solicite um orçamento pelo WhatsApp.",
    mascotImage: "",
    mascotAlt: "Mascote"
  }
};
