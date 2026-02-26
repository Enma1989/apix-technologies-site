export const siteConfig = {
  brand: {
    name: "Apix Technologies",
    slogan: {
      pt: "Eficiência técnica. Execução sem improviso.",
      en: "Technical efficiency. Execution without improvisation.",
      es: "Eficiencia técnica. Ejecución sin improvisación.",
    },
    colors: {
      primary: "#0B3C5D",
      secondary: "#FFD23F",
      dark: "#111111",
      lightGray: "#E5E5E5",
      white: "#FFFFFF",
    },
  },
  contact: {
    brasil: {
      location: "Brasil (Base Operacional)",
      subtitle: {
        pt: "Comercial e Consultoria Estratégica",
        en: "Sales and Strategic Consulting",
        es: "Comercial y Consultoría Estratégica",
      },
      email: "comercial@apixtech.com.br",
      phone: "+55 41 91934-4437",
    },
    peru: {
      location: "Peru (Suporte Técnico Local)",
      subtitle: {
        pt: "Atendimento técnico presencial",
        en: "On-site technical support",
        es: "Atención técnica presencial",
      },
      phone: "+51 964 924 715",
    },
    spain: {
      location: "Espanha (Atendimento Remoto)",
      subtitle: {
        pt: "Consultoria e suporte remoto via agendamento",
        en: "Remote consulting and support via scheduling",
        es: "Consultoría y soporte remoto vía agendamiento",
      },
      cta: {
        pt: "Agendar Diagnóstico Estratégico",
        en: "Schedule Strategic Diagnosis",
        es: "Agendar Diagnóstico Estratégico",
      },
    },
  },
  navigation: {
    links: [
      { name: { pt: "Home", en: "Home", es: "Inicio" }, href: "/" },
      { name: { pt: "Serviços", en: "Services", es: "Servicios" }, href: "/servicos" },
      { name: { pt: "Sobre", en: "About", es: "Sobre nosotros" }, href: "/sobre" },
      { name: { pt: "Cases", en: "Case Studies", es: "Casos" }, href: "/cases" },
      { name: { pt: "Blog", en: "Blog", es: "Blog" }, href: "/blog" },
      { name: { pt: "Contato", en: "Contact", es: "Contacto" }, href: "/contato" },
    ],
  },
  home: {
    hero: {
      headline: {
        line1: { pt: "Apix Technologies", en: "Apix Technologies", es: "Apix Technologies" },
        line2: { pt: "Descomplicando a TI", en: "Uncomplicating IT", es: "Descomplicando la TI" },
      },
      subheadline: { pt: "", en: "", es: "" },
      primaryCTA: {
        pt: "SOLICITAR DIAGNÓSTICO",
        en: "REQUEST DIAGNOSIS",
        es: "SOLICITAR DIAGNÓSTICO",
      },
      secondaryCTA: {
        pt: "FALAR COM CONSULTOR",
        en: "TALK TO CONSULTANT",
        es: "HABLAR CON CONSULTOR",
      },
    },
    statement: {
      headline: {
        pt: "Previsibilidade operacional não é sorte. É estrutura.",
        en: "Operational predictability is not luck. It is structure.",
        es: "La previsibilidad operativa no é suerte. Es estructura.",
      },
      text: {
        pt: "Focamos em mitigar riscos e maximizar o impacto no negócio através de uma infraestrutura robusta e governança impecável.",
        en: "We focus on mitigating risks and maximizing business impact through a robust infrastructure and flawless governance.",
        es: "Nos enfocamos en mitigar riesgos y maximizar el impacto en el negocio a través de una infraestructura robusta y una gobernanza impecable.",
      },
    },
    pillars: [
      {
        title: { pt: "Infraestrutura", en: "Infrastructure", es: "Infraestructura" },
        text: {
          pt: "Arquitetura, redes, servidores e padronização para escalar com estabilidade.",
          en: "Architecture, networks, servers and standardization to scale with stability.",
          es: "Arquitectura, redes, servidores y estandarización para escalar con estabilidad.",
        },
      },
      {
        title: { pt: "Segurança", en: "Security", es: "Seguridad" },
        text: {
          pt: "Controle de acesso, hardening e políticas para reduzir risco operacional.",
          en: "Access control, hardening and policies to reduce operational risk.",
          es: "Control de acceso, hardening y políticas para reducir el riesgo operativo.",
        },
      },
      {
        title: { pt: "Cloud", en: "Cloud", es: "Cloud" },
        text: {
          pt: "Ambientes cloud e híbridos com governança, custo inteligente e performance.",
          en: "Cloud and hybrid environments with governance, smart cost and performance.",
          es: "Ambientes cloud e híbridos con gobernanza, coste inteligente y rendimiento.",
        },
      },
    ],
    methodology: {
      title: { pt: "Metodologia Consultiva", en: "Consultive Methodology", es: "Metodología Consultiva" },
      subtitle: {
        pt: "Nosso processo é estruturado para garantir que cada etapa da sua infraestrutura seja governada por dados e padrões de excelência.",
        en: "Our process is structured to ensure each stage of your infrastructure is governed by data and standards of excellence.",
        es: "Nuestro proceso está estructurado para garantizar que cada etapa de su infraestructura se rija por datos y estándares de excelencia.",
      },
      steps: [
        {
          number: "01",
          title: { pt: "Diagnóstico Estratégico", en: "Strategic Diagnosis", es: "Diagnóstico Estratégico" },
          desc: {
            pt: "Riscos, gargalos e prioridades com visão executiva.",
            en: "Risks, bottlenecks and priorities with an executive view.",
            es: "Riesgos, cuellos de botella y prioridades con una visión ejecutiva.",
          },
        },
        {
          number: "02",
          title: { pt: "Arquitetura", en: "Architecture", es: "Arquitectura" },
          desc: {
            pt: "Desenho do ambiente com escalabilidade, governança e custo inteligente.",
            en: "Environment design with scalability, governance and smart cost.",
            es: "Diseño del entorno con escalabilidad, gobernanza y coste inteligente.",
          },
        },
        {
          number: "03",
          title: { pt: "Implementação", en: "Implementation", es: "Implementación" },
          desc: {
            pt: "Execução com documentação, padrão e controle de mudanças.",
            en: "Execution with documentation, standard and change control.",
            es: "Ejecución con documentación, estándar y control de cambios.",
          },
        },
        {
          number: "04",
          title: { pt: "Operação & Monitoramento", en: "Operation & Monitoring", es: "Operación y Monitoreo" },
          desc: {
            pt: "Rotina, alertas, melhoria contínua e accountability.",
            en: "Routine, alerts, continuous improvement and accountability.",
            es: "Rutina, alertas, mejora continua y rendición de cuentas.",
          },
        },
      ],
    },
    audit: {
      headline: {
        pt: "Sua infraestrutura está pronta para escalar com segurança?",
        en: "Is your infrastructure ready to scale securely?",
        es: "¿Está su infraestructura lista para escalar de forma segura?",
      },
      subheadline: {
        pt: "Realizamos uma mini auditoria técnica estruturada, identificamos riscos críticos e entregamos um relatório executivo com prioridades claras.",
        en: "We perform a structured technical mini audit, identify critical risks, and deliver an executive report with clear priorities.",
        es: "Realizamos una mini auditoría técnica estructurada, identificamos riesgos críticos y entregamos un informe ejecutivo con prioridades claras.",
      },
      included: {
        title: { pt: "O que está incluso", en: "What's included", es: "Qué está incluido" },
        items: {
          pt: [
            "Análise de infraestrutura e redes",
            "Avaliação de segurança e políticas de acesso",
            "Verificação de backup e continuidade",
            "Mapeamento de vulnerabilidades evidentes",
            "Relatório com plano de ação priorizado",
          ],
          en: [
            "Infrastructure and network analysis",
            "Security assessment and access policies",
            "Backup and continuity verification",
            "Mapping of obvious vulnerabilities",
            "Report with prioritized action plan",
          ],
          es: [
            "Análisis de infraestructura y redes",
            "Evaluación de seguridad y políticas de acceso",
            "Verificación de respaldo y continuidad",
            "Mapeo de vulnerabilidades evidentes",
            "Informe con plan de acción priorizado",
          ],
        },
      },
      howItWorks: {
        title: { pt: "Como funciona", en: "How it works", es: "Cómo funciona" },
        steps: [
          {
            number: "01",
            text: {
              pt: "Reunião técnica inicial (30 min)",
              en: "Initial technical meeting (30 min)",
              es: "Reunión técnica inicial (30 min)",
            },
          },
          {
            number: "02",
            text: {
              pt: "Coleta estruturada de informações",
              en: "Structured information gathering",
              es: "Recolección estructurada de información",
            },
          },
          {
            number: "03",
            text: {
              pt: "Análise interna",
              en: "Internal analysis",
              es: "Análisis interno",
            },
          },
          {
            number: "04",
            text: {
              pt: "Entrega do relatório executivo",
              en: "Executive report delivery",
              es: "Entrega del informe ejecutivo",
            },
          },
        ],
      },
      cta: {
        primary: {
          pt: "Agendar Sessão Gratuita",
          en: "Schedule Free Session",
          es: "Agendar Sesión Gratuita",
        },
        secondary: {
          pt: "Falar com um Consultor",
          en: "Talk to a Consultant",
          es: "Hablar con un Consultor",
        },
      },
      trustLine: {
        pt: "Entrega do relatório em até 48h após análise.",
        en: "Report delivery within 48h after analysis.",
        es: "Entrega del informe en hasta 48h después del análisis.",
      },
    },
  },
  services: [
    {
      slug: "redes-wireless",
      title: { pt: "Redes Wireless", en: "Wireless Networks", es: "Redes Inalámbricas" },
      desc: {
        pt: "Wi-Fi corporativo com engenharia de cobertura, capacidade e roaming. Estabilidade real para operação crítica.",
        en: "Corporate Wi-Fi with coverage engineering, capacity and roaming. Real stability for critical operation.",
        es: "Wi-Fi corporativo con ingeniería de cobertura, capacidad y roaming. Estabilidad real para operación crítica.",
      },
    },
    {
      slug: "cabeamento-estruturado",
      title: { pt: "Cabeamento Estruturado", en: "Structured Cabling", es: "Cableado Estructurado" },
      desc: {
        pt: "Infra física padrão enterprise: certificação, organização e performance. Sem gambiarra. Sem retrabalho.",
        en: "Enterprise standard physical infrastructure: certification, organization and performance. No workarounds. No rework.",
        es: "Infraestructura física estándar empresarial: certificación, organización y rendimiento. Sin parches. Sin retrabajos.",
      },
    },
    {
      slug: "servidores",
      title: { pt: "Servidores", en: "Servers", es: "Servidores" },
      desc: {
        pt: "Ambientes on-prem e híbridos desenhados para disponibilidade e crescimento. Padronização, monitoramento e controle.",
        en: "On-prem and hybrid environments designed for availability and growth. Standardization, monitoring and control.",
        es: "Entornos on-prem e híbridos diseñados para disponibilidad y crecimiento. Estandarización, monitoreo y control.",
      },
    },
    {
      slug: "ciberseguranca",
      title: { pt: "Cibersegurança", en: "Cybersecurity", es: "Ciberseguridad" },
      desc: {
        pt: "Camadas de proteção com governança: hardening, controle de acesso, auditoria e resposta a incidentes.",
        en: "Protection layers with governance: hardening, access control, auditing and incident response.",
        es: "Capas de protección con gobernanza: hardening, control de acceso, auditoría y respuesta a incidentes.",
      },
    },
    {
      slug: "gestao-de-backup",
      title: { pt: "Gestão de Backup", en: "Backup Management", es: "Gestión de Backup" },
      desc: {
        pt: "Backup 3-2-1 com testes de restore e evidência. Continuidade operacional com plano claro de recuperação.",
        en: "3-2-1 backup with restore tests and evidence. Operational continuity with a clear recovery plan.",
        es: "Respaldo 3-2-1 con pruebas de restauración y evidencia. Continuidad operativa con un plan claro de recuperación.",
      },
    },
    {
      slug: "cftv-seguranca-eletronica",
      title: { pt: "CFTV & Segurança Eletrônica", en: "CCTV & Electronic Security", es: "CCTV & Seguridad Electrónica" },
      desc: {
        pt: "Segurança física integrada: projeto, instalação e retenção de evidências. Visibilidade e rastreabilidade.",
        en: "Integrated physical security: design, installation and evidence retention. Visibility and traceability.",
        es: "Seguridad física integrada: diseño, instalación y retención de evidencias. Visibilidad y trazabilidad.",
      },
    },
    {
      slug: "microsoft-365",
      title: { pt: "Microsoft 365", en: "Microsoft 365", es: "Microsoft 365" },
      desc: {
        pt: "Tenant governado: identidade, compliance, SharePoint/Teams e políticas. Produtividade com controle.",
        en: "Governed tenant: identity, compliance, SharePoint/Teams and policies. Productivity with control.",
        es: "Tenant gobernado: identidad, cumplimiento, SharePoint/Teams y políticas. Productividad con control.",
      },
    },
    {
      slug: "google-workspace",
      title: { pt: "Google Workspace", en: "Google Workspace", es: "Google Workspace" },
      desc: {
        pt: "Workspace organizado e seguro: estrutura, permissões, migração e governança de dados. Sem bagunça.",
        en: "Organized and secure Workspace: structure, permissions, migration and data governance. No mess.",
        es: "Workspace organizado y seguro: estructura, permisos, migración y gobernanza de datos. Sin desorden.",
      },
    },
    {
      slug: "suporte-tecnico",
      title: { pt: "Suporte Técnico", en: "Technical Support", es: "Soporte Técnico" },
      desc: {
        pt: "Suporte consultivo com SLA, processos e ownership. Menos interrupção. Mais previsibilidade.",
        en: "Consultative support with SLA, processes and ownership. Less interruption. More predictability.",
        es: "Soporte consultivo con SLA, procesos y ownership. Menos interrupción. Más previsibilidad.",
      },
    },
  ],
  footer: {
    presence: {
      pt: "Atendimento e operação: Brasil (base) · Peru (suporte técnico local) · Espanha (atendimento remoto).",
      en: "Service coverage: Brazil (base) · Peru (local technical support) · Spain (remote service).",
      es: "Cobertura de servicio: Brasil (base) · Perú (soporte técnico local) · España (atención remota).",
    },
  },
};

export type Locale = "pt" | "en" | "es";
export const defaultLocale: Locale = "pt";
export const locales: Locale[] = ["pt", "en", "es"];
