export const pt = {
  hero: {
    role: "Desenvolvedor Front-end",
    description: "Estudante de Engenharia da Computação (5º Sem) focado em Desenvolvimento Front-end e Web Design. Crio interfaces modernas e exploro soluções em IoT.",
    cta: "Entre em Contato",
    resume: "Baixar CV",
    socials: "Minhas redes sociais",
    roles: ["Desenvolvedor Front-end", "UI Designer", "Criador Web", "Explorador IoT"]
  },
  section: {
    experience: "Experiência Profissional",
    projects: "Projetos Selecionados",
    skills: "Habilidades & Tecnologias",
    contact: "Vamos Conversar",
    about: "Sobre Mim"
  },
  skills: {
    categories: [
      { name: "Frontend & Web", items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5/CSS3"] },
      { name: "Hardware & IoT", items: ["ESP32", "Arduino", "Sensores", "Eletrônica Básica"] },
      { name: "Gráficos & Design", items: ["Three.js", "WebGL", "Figma", "Photoshop", "Web Design"] },
      { name: "Ferramentas & Outros", items: ["Git", "GitHub", "VS Code", "SQL", "Excel (Dashboards)"] },
    ]
  },
  footer: {
    newsletter: "Assine minha newsletter",
    newsletterDesc: "Receba atualizações sobre meus projetos e artigos.",
    subscribe: "Assinar",
    rights: "Todos os direitos reservados.",
    quote: "\"Simplicidade é a sofisticação suprema.\""
  },
  experience: {
    items: [
      {
        title: "Estagiário - Laboratório de Elétrica",
        company: "Centro Universitário Facens",
        description: [
          "Suporte técnico na montagem de experimentos de elétrica e física, auxiliando professores e alunos.",
          "Gestão de estoque e controle de materiais usando Excel para garantir disponibilidade de recursos para aulas práticas.",
          "Padronização de guias de experimentos para melhorar a organização interna."
        ]
      },
      {
        title: "Operador de Telemarketing",
        company: "Instituto Cultural Newton Paiva Ferreira",
        description: [
          "Desenvolvi comunicação assertiva e habilidades de resolução de problemas sob pressão (40-50 chamadas/dia).",
          "Usei CRM e Excel para gestão de leads e auditoria de dados, elogiado pela organização e clareza."
        ]
      }
    ]
  },
  contact: {
    title: "Entre em contato",
    description: "Tem uma pergunta ou quer trabalhar junto? Mande uma mensagem!",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    submit: "Enviar Mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada com sucesso!",
    successDesc: "Obrigado pelo contato. Retornarei em breve."
  },
  command: {
    search: "Digite um comando ou busque...",
    noResults: "Nenhum resultado encontrado.",
    general: "Geral",
    socials: "Redes Sociais",
    theme: "Tema",
    navigation: "Navegação",
    sendEmail: "Enviar Email",
    downloadCv: "Baixar CV",
    viewGithub: "Ver GitHub",
    viewLinkedin: "Ver LinkedIn",
    light: "Claro",
    dark: "Escuro",
    system: "Sistema",
    goToExperience: "Ir para Experiência",
    goToProjects: "Ir para Projetos",
    goToSkills: "Ir para Habilidades",
    goToContact: "Ir para Contato"
  },
  project: {
    view: "Ver Projeto",
    source: "Código Fonte",
    details: "Ver Detalhes",
    features: "Principais Recursos",
    technologies: "Tecnologias",
    status: {
      live: "No Ar",
      building: "Construindo",
      comingSoon: "Em Breve"
    },
    items: [
      {
        title: "Portal de Animes",
        description: "WebApp responsivo integrando API externa (Jikan) para dados de animes em tempo real.",
        longDescription: "Uma plataforma completa de descoberta de animes construída com React e Next.js. Usuários podem buscar seus animes favoritos, ver informações detalhadas incluindo sinopse, personagens e episódios.",
        features: [
          "Busca de dados em tempo real usando Jikan API",
          "Capacidades dinâmicas de busca e filtro",
          "Layout de grid responsivo",
          "Páginas detalhadas de perfil de anime"
        ]
      },
      {
        title: "Voxel Terrain Engine",
        description: "Engine 3D focada em performance e renderização otimizada usando InstancedMesh com geração procedural de terreno.",
        longDescription: "Uma engine voxel 3D de alta performance rodando no navegador. Utiliza Three.js e WebGL para renderizar vastos terrenos procedurais.",
        features: [
          "Geração procedural de terreno usando Perlin Noise",
          "Renderização otimizada com InstancedMesh",
          "Controles de câmera em primeira pessoa",
          "Carregamento dinâmico de chunks"
        ]
      },
      {
        title: "IoT Crowd Monitoring",
        description: "Protótipo de hardware para predizer níveis de multidão usando sensores ultrassônicos e ESP32.",
        longDescription: "Uma solução IoT projetada para monitorar e analisar tráfego de pessoas em tempo real. Usando um microcontrolador ESP32 e sensores ultrassônicos.",
        features: [
          "Contagem de pessoas em tempo real",
          "Conectividade Wi-Fi baseada em ESP32",
          "Integração REST API para log de dados",
          "Design de baixo consumo de energia"
        ]
      },
      {
        title: "Em Breve",
        description: "...",
        longDescription: "Trabalhando em algo novo e empolgante!",
        features: []
      }
    ]
  }
}
