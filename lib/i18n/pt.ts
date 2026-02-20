export const pt = {
  hero: {
    role: "Desenvolvedor Front-end",
    description: "Estudante de Engenharia da Computação (5º Sem) focado em Desenvolvimento Front-end e Web Design.",
    cta: "Entre em Contato",
    resume: "Baixar CV",
    socials: "Minhas redes sociais",
    roles: ["Desenvolvedor Front-end", "UI Designer", "Criador Web", "Explorador IoT"]
  },
  about: {
    title: "Sobre Mim",
    bio: "Olá! Sou o Tarcizio — estudante de Engenharia da Computação apaixonado por construir experiências digitais bonitas e funcionais. Adoro transformar ideias em realidade e sempre busco aprender coisas novas.",
    interests: {
      title: "O Que Me Interessa",
      items: ["UI/UX Design", "IoT & Sistemas Embarcados", "Aprendizado Contínuo", "Café & Código", "Desenhar", "Games"]
    }
  },
  section: {
    experience: "Experiência Profissional",
    projects: "Projetos Selecionados",
    skills: "Habilidades & Tecnologias",
    education: "Educação & Certificações",
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
  education: {
    degree: {
      title: "Engenharia da Computação",
      institution: "Centro Universitário Facens",
      period: "Fev/2024 — Nov/2028 (Previsão)",
      status: "Atualmente no 5º Semestre",
    },
    certifications: [
      {
        name: "Scrum Fundamentals Certified (SFC)",
        issuer: "SCRUMstudy",
        date: "Nov/2025",
      },
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermediário" },
      { name: "Espanhol", level: "Básico" },
    ],
    labels: {
      degree: "Formação",
      certifications: "Certificações",
      languages: "Idiomas",
    }
  },
  footer: {
    rights: "Todos os direitos reservados.",
    builtWith: "Feito com",
    nav: {
      about: "Sobre Mim",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      education: "Educação",
      contact: "Contato"
    }
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
    successDesc: "Obrigado pelo contato. Retornarei em breve.",
    validation: {
      nameMin: "O nome deve ter pelo menos 2 caracteres.",
      emailInvalid: "Por favor, insira um email válido.",
      messageMin: "A mensagem deve ter pelo menos 10 caracteres."
    }
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
    goToEducation: "Ir para Educação",
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
        title: "Portal Animes",
        description: "WebApp responsivo full-stack com dados de animes em tempo real via Jikan API, busca avançada e filtragem dinâmica.",
        longDescription: "Uma plataforma completa de descoberta de animes construída com React e Next.js. Oferece busca em tempo real com filtragem debounced, perfis detalhados com sinopse, personagens e episódios, e layout responsivo em grid.",
        features: [
          "Busca de dados em tempo real via Jikan REST API",
          "Busca debounced com filtragem dinâmica",
          "Layout de grid responsivo com CSS Modules",
          "Páginas de perfil de anime com carregamento lazy"
        ]
      },
      {
        title: "Voxel Terrain Engine",
        description: "Engine 3D de alta performance no navegador com geração procedural de terreno e renderização otimizada via InstancedMesh.",
        longDescription: "Uma engine voxel 3D em tempo real rodando inteiramente no navegador. Utiliza Three.js e WebGL com InstancedMesh para renderização GPU-otimizada de blocos, terreno procedural via Perlin Noise e câmera em primeira pessoa.",
        features: [
          "Geração procedural de terreno com Perlin Noise",
          "Renderização GPU-otimizada via InstancedMesh",
          "Câmera em primeira pessoa com pointer lock",
          "Carregamento dinâmico de chunks para performance"
        ]
      },
      {
        title: "IoT Crowd Monitoring",
        description: "Protótipo IoT com ESP32 para predição de densidade de multidão em tempo real usando sensores ultrassônicos.",
        longDescription: "Uma solução IoT para monitoramento e análise de tráfego de pessoas em tempo real. Usa microcontrolador ESP32 com sensores ultrassônicos para contagem bidirecional, com log de dados em nuvem via REST API.",
        features: [
          "Contagem bidirecional de pessoas em tempo real",
          "Conectividade Wi-Fi ESP32 para integração cloud",
          "Log de dados e visualização via REST API",
          "Design de baixo consumo para operação contínua"
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
