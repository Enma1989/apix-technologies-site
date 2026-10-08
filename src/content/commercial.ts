import { Locale } from "@/config/siteConfig";

type Project = {
    name: string;
    problem: string;
    audience: string;
    deliverables: string[];
    layer: string;
    note?: string;
};

type Practice = {
    title: string;
    problem: string;
    deliverables: string;
};

type LocaleContent = {
    shared: {
        projects: string;
        security: string;
        services: string;
        architecture: string;
        contact: string;
        requestDiagnostic: string;
        talkProject: string;
        optionalContinuity: string;
        scopeNote: string;
    };
    projects: {
        metadata: { title: string; description: string };
        hero: { eyebrow: string; title: string; subtitle: string; primary: string; secondary: string };
        benefits: { eyebrow: string; title: string; intro: string; items: Array<{ title: string; text: string }> };
        catalog: { eyebrow: string; title: string; intro: string; problem: string; audience: string; deliverables: string; layer: string; expand: string; projects: Project[] };
        layers: { eyebrow: string; title: string; intro: string; items: Array<{ title: string; text: string }> };
        process: { eyebrow: string; title: string; items: Array<{ title: string; text: string }> };
        deliverables: { eyebrow: string; title: string; intro: string; items: string[]; note: string };
        continuity: { eyebrow: string; title: string; text: string; link: string };
        faq: { eyebrow: string; title: string; items: Array<{ question: string; answer: string }> };
        final: { title: string; text: string; primary: string; secondary: string };
    };
    security: {
        metadata: { title: string; description: string };
        hero: { eyebrow: string; title: string; subtitle: string; primary: string; secondary: string };
        risks: { eyebrow: string; title: string; intro: string; items: string[] };
        practices: { eyebrow: string; title: string; intro: string; problem: string; possible: string; items: Practice[] };
        method: { eyebrow: string; title: string; intro: string; steps: string[]; layersTitle: string; layers: Array<{ title: string; text: string }> };
        evidence: { eyebrow: string; title: string; intro: string; items: string[]; note: string };
        engagement: { eyebrow: string; title: string; projectTitle: string; projectText: string; continuousTitle: string; continuousText: string; automationNote: string };
        faq: { eyebrow: string; title: string; items: Array<{ question: string; answer: string }> };
        final: { title: string; text: string; primary: string; secondary: string };
    };
};

const content: Record<Locale, LocaleContent> = {
    pt: {
        shared: {
            projects: "Projetos",
            security: "Segurança da Informação",
            services: "Serviços",
            architecture: "Arquitetura MaaS®",
            contact: "Contato",
            requestDiagnostic: "Solicitar diagnóstico",
            talkProject: "Conversar sobre este projeto",
            optionalContinuity: "Continuidade opcional",
            scopeNote: "A composição final é definida no diagnóstico e na proposta técnica.",
        },
        projects: {
            metadata: {
                title: "Projetos de TI com Arquitetura MaaS®",
                description: "Projetos de infraestrutura, nuvem e segurança com escopo definido, documentação técnica e critérios de aceitação.",
            },
            hero: {
                eyebrow: "Diagnóstico → Projeto → Operação → Evolução",
                title: "Projetos de TI com Arquitetura MaaS®",
                subtitle: "Planejamos e implementamos melhorias em infraestrutura, nuvem e segurança, com escopo definido, documentação e validação de resultados.",
                primary: "Solicitar diagnóstico",
                secondary: "Explorar projetos",
            },
            benefits: {
                eyebrow: "Contratação com clareza",
                title: "Do problema técnico a uma entrega verificável",
                intro: "Cada projeto nasce de uma necessidade concreta e avança com responsabilidades, decisões e critérios de aceite registrados.",
                items: [
                    { title: "Escopo definido", text: "Objetivos, responsabilidades, premissas e limites alinhados antes da execução." },
                    { title: "Prioridades do negócio", text: "Decisões técnicas ordenadas por risco, impacto operacional e contexto da empresa." },
                    { title: "Controle de mudanças", text: "Implementação planejada, com registro das alterações e plano de reversão quando pertinente." },
                    { title: "Documentação técnica", text: "Arquitetura, configurações, inventários ou procedimentos produzidos conforme o projeto." },
                    { title: "Validação da entrega", text: "Evidências e critérios de aceitação definidos para confirmar o resultado contratado." },
                    { title: "Transição organizada", text: "Transferência de conhecimento e passagem estruturada para a equipe ou operação contratada." },
                ],
            },
            catalog: {
                eyebrow: "Catálogo de projetos",
                title: "Dez caminhos para evoluir a TI",
                intro: "Contrate uma iniciativa pontual ou componha uma jornada em etapas. Cada projeto destaca sua camada MaaS® principal e pode envolver outras camadas conforme as dependências do ambiente.",
                problem: "Problema tratado",
                audience: "Indicado para",
                deliverables: "Entregáveis possíveis",
                layer: "Camada principal",
                expand: "Ver escopo e entregáveis",
                projects: [
                    {
                        name: "Microsoft 365 Seguro e Governado",
                        problem: "Contas, e-mails e documentos sem controles consistentes.",
                        audience: "Empresas que utilizam Microsoft 365 e precisam organizar identidades, permissões e proteção da colaboração.",
                        deliverables: ["Revisão do tenant", "MFA e políticas de acesso conforme licenciamento", "Proteção de e-mail", "Revisão de permissões", "Procedimentos de entrada e saída"],
                        layer: "Blindagem & Identidade",
                    },
                    {
                        name: "Google Workspace Seguro e Organizado",
                        problem: "Contas desprotegidas, compartilhamento descontrolado e arquivos dispersos.",
                        audience: "Organizações que precisam padronizar administração, acesso e ciclo de vida da informação no Google Workspace.",
                        deliverables: ["Revisão administrativa", "MFA", "Unidades compartilhadas", "Permissões e regras de compartilhamento", "Retenção conforme licenciamento"],
                        layer: "Blindagem & Identidade",
                    },
                    {
                        name: "Backup e Recuperação de Desastres",
                        problem: "Backups sem estratégia ou recuperação não comprovada.",
                        audience: "Ambientes em que a indisponibilidade ou perda de dados exige objetivos e procedimentos claros de recuperação.",
                        deliverables: ["Levantamento das cargas", "Objetivos de recuperação", "Desenho e configuração da solução", "Testes de restauração", "Procedimentos documentados"],
                        layer: "Continuidade Empresarial",
                    },
                    {
                        name: "Monitoramento Inteligente de Infraestrutura",
                        problem: "Falhas descobertas apenas depois de afetarem a operação.",
                        audience: "Empresas que precisam de visibilidade sobre infraestrutura e serviços críticos.",
                        deliverables: ["Monitoramento com tecnologias pertinentes, como Zabbix", "Dashboards com Grafana quando aplicável", "Alertas", "Documentação", "Transferência de conhecimento"],
                        layer: "Orquestração & Governança",
                    },
                    {
                        name: "Otimização de Custos em Nuvem — FinOps",
                        problem: "Consumo de nuvem sem visibilidade e recursos mal dimensionados.",
                        audience: "Operações em nuvem que precisam entender custos, capacidade e responsabilidades de consumo.",
                        deliverables: ["Análise de custos", "Identificação de recursos ociosos", "Recomendações de dimensionamento", "Avaliação de compromissos de consumo", "Controles orçamentários"],
                        layer: "Orquestração & Governança",
                    },
                    {
                        name: "Modernização de Servidores e Migração para Nuvem",
                        problem: "Infraestrutura antiga, capacidade insuficiente ou dificuldade de crescimento.",
                        audience: "Ambientes que precisam renovar servidores, virtualização ou adotar nuvem com risco controlado.",
                        deliverables: ["Avaliação de dependências", "Arquitetura da solução", "Piloto quando aplicável", "Migração e validação", "Plano de reversão"],
                        layer: "Base Estrutural",
                    },
                    {
                        name: "Rede Corporativa Segura e Conectividade entre Unidades",
                        problem: "Conectividade instável e ausência de segmentação e controle.",
                        audience: "Empresas com escritórios, filiais, trabalho híbrido ou serviços distribuídos.",
                        deliverables: ["Desenho de rede", "Firewall e segmentação", "Wi-Fi corporativo", "VPN", "Integração entre unidades ou nuvem conforme escopo"],
                        layer: "Base Estrutural",
                    },
                    {
                        name: "Proteção de Endpoints e Gestão de Dispositivos",
                        problem: "Computadores sem proteção e administração centralizadas.",
                        audience: "Equipes que precisam padronizar segurança, configuração e atualização dos dispositivos corporativos.",
                        deliverables: ["Proteção de endpoints", "Políticas de dispositivos", "Criptografia", "Gestão de atualizações", "Piloto e procedimentos operacionais"],
                        layer: "Blindagem & Identidade",
                    },
                    {
                        name: "Governança de Dados e Segurança da Informação",
                        problem: "Ausência de critérios para acesso, compartilhamento e retenção.",
                        audience: "Organizações que precisam conhecer seus repositórios e aplicar regras proporcionais à informação tratada.",
                        deliverables: ["Levantamento dos repositórios contratados", "Classificação da informação", "Matriz de acesso", "Políticas e retenção", "Controles de proteção e orientação aos usuários"],
                        layer: "Orquestração & Governança",
                    },
                    {
                        name: "Avaliação de Vulnerabilidades e Pentest",
                        problem: "Exposição técnica desconhecida ou sem validação.",
                        audience: "Ambientes que precisam identificar vulnerabilidades ou validar, por testes autorizados, a possibilidade de exploração.",
                        deliverables: ["Escopo e autorização formal", "Avaliação automatizada e análise técnica ou pentest, conforme contratação", "Evidências e classificação de riscos", "Recomendações", "Reteste quando incluído"],
                        layer: "Blindagem & Identidade",
                        note: "A avaliação de vulnerabilidades identifica e analisa exposições. O pentest acrescenta testes manuais e controlados de exploração dentro do escopo autorizado; uma varredura automatizada não equivale a um pentest.",
                    },
                ],
            },
            layers: {
                eyebrow: "Arquitetura MaaS®",
                title: "Quatro camadas, uma visão integrada",
                intro: "A camada principal orienta o projeto. Dependências técnicas podem conectar a entrega às demais camadas sem ampliar o escopo sem aprovação.",
                items: [
                    { title: "Base Estrutural", text: "Rede, conectividade, computação e fundações técnicas." },
                    { title: "Blindagem & Identidade", text: "Acessos, dispositivos, colaboração e controles de segurança." },
                    { title: "Continuidade Empresarial", text: "Recuperação, resiliência e preparação para interrupções." },
                    { title: "Orquestração & Governança", text: "Visibilidade, políticas, indicadores e evolução coordenada." },
                ],
            },
            process: {
                eyebrow: "Processo de execução",
                title: "Governança do início à transição",
                items: [
                    { title: "Diagnóstico e levantamento", text: "Entendimento do ambiente, necessidade e restrições relevantes." },
                    { title: "Prioridades e escopo", text: "Definição do que será entregue, responsabilidades, premissas e aceite." },
                    { title: "Desenho da solução", text: "Arquitetura, plano de implementação e decisões técnicas." },
                    { title: "Implementação governada", text: "Execução com controle de mudanças e comunicação dos impactos." },
                    { title: "Validação e documentação", text: "Testes, evidências, documentação e registro de pendências." },
                    { title: "Transição e evolução", text: "Transferência de conhecimento e definição da continuidade, quando contratada." },
                ],
            },
            deliverables: {
                eyebrow: "Entregáveis comuns",
                title: "Evidência para operar e decidir",
                intro: "Os artefatos são selecionados conforme o tipo, o porte e o escopo de cada projeto.",
                items: ["Escopo e responsabilidades", "Plano de implementação", "Documentação e inventário pertinentes", "Evidências de validação", "Pendências e recomendações", "Transferência de conhecimento"],
                note: "Nem todos os projetos incluem os mesmos documentos, ferramentas ou uma operação mensal. A proposta técnica registra exatamente o que será entregue.",
            },
            continuity: {
                eyebrow: "Depois da entrega",
                title: "Operação & Suporte MaaS® como continuidade opcional",
                text: "O projeto pode terminar após a validação e a transição. Quando fizer sentido, a Apix pode assumir sustentação, acompanhamento e evolução em contrato separado, com responsabilidades e SLA próprios.",
                link: "Conhecer Operação & Suporte MaaS®",
            },
            faq: {
                eyebrow: "Perguntas frequentes",
                title: "Antes de iniciar um projeto",
                items: [
                    { question: "Posso contratar apenas um projeto?", answer: "Sim. O projeto pontual tem escopo, início, conclusão e critérios de entrega próprios. A sustentação posterior é opcional e contratada separadamente." },
                    { question: "O diagnóstico já define preço e prazo?", answer: "O diagnóstico reúne informações para dimensionar escopo, dependências, premissas, investimento e cronograma em uma proposta técnica." },
                    { question: "Os projetos interrompem a operação?", answer: "Os impactos e janelas de mudança são avaliados no planejamento. Quando pertinente, a solução inclui piloto, comunicação e plano de reversão." },
                    { question: "Vocês trabalham com a equipe interna ou outros fornecedores?", answer: "Sim, desde que responsabilidades, acessos e interfaces estejam definidos no escopo e na governança do projeto." },
                    { question: "Todos os projetos usam as quatro camadas MaaS®?", answer: "Cada projeto tem uma camada principal. Outras camadas podem ser envolvidas quando houver dependências, sempre dentro do escopo aprovado." },
                ],
            },
            final: {
                title: "Qual melhoria de TI precisa sair do papel?",
                text: "Comece por um diagnóstico para transformar a necessidade em prioridades, escopo e próximos passos claros.",
                primary: "Solicitar diagnóstico",
                secondary: "Falar no WhatsApp",
            },
        },
        security: {
            metadata: {
                title: "Segurança da Informação com Governança MaaS®",
                description: "Proteção de identidades, dispositivos, redes e dados com controles proporcionais, evidências e evolução estruturada.",
            },
            hero: {
                eyebrow: "Blindagem, identidade e governança",
                title: "Segurança da Informação com Governança MaaS®",
                subtitle: "Proteja identidades, dispositivos e dados com controles proporcionais ao seu negócio, prioridades claras e acompanhamento estruturado.",
                primary: "Solicitar avaliação de segurança",
                secondary: "Conhecer as frentes",
            },
            risks: {
                eyebrow: "Risco com contexto",
                title: "Controles proporcionais ao que precisa ser protegido",
                intro: "Segurança começa por entender exposição, impacto e capacidade operacional — sem alarmismo e sem promessas absolutas.",
                items: ["Contas comprometidas", "Acessos indevidos ou excessivos", "Exposição de dados", "Equipamentos vulneráveis", "Configurações inseguras", "Falta de preparação para incidentes", "Recuperação insuficiente"],
            },
            practices: {
                eyebrow: "Frentes de atuação",
                title: "Da identidade à recuperação",
                intro: "As frentes são combinadas conforme o diagnóstico, o licenciamento disponível e o escopo aprovado.",
                problem: "O que tratamos",
                possible: "Entregáveis possíveis",
                items: [
                    { title: "Identidade e Controle de Acesso", problem: "Credenciais frágeis, privilégios excessivos e processos inconsistentes de entrada e saída.", deliverables: "MFA, revisão de acessos, perfis administrativos, políticas condicionais e procedimentos. Microsoft Entra pode ser utilizado quando pertinente e licenciado." },
                    { title: "Proteção de E-mail e Colaboração", problem: "Phishing, compartilhamento indevido e configurações frágeis em e-mail e arquivos.", deliverables: "Revisão de políticas, proteção de e-mail, regras de compartilhamento e configuração de Microsoft 365 ou Google Workspace conforme contratação e licenciamento." },
                    { title: "Proteção de Endpoints", problem: "Dispositivos sem padrão de proteção, criptografia, atualização ou gestão centralizada.", deliverables: "Políticas de dispositivo, criptografia, proteção e gestão com tecnologias como Defender e Intune quando aplicáveis." },
                    { title: "Segurança de Redes e Nuvem", problem: "Redes planas, acessos expostos, regras sem revisão e configurações de nuvem inconsistentes.", deliverables: "Segmentação, revisão de regras, VPN, hardening e controles em firewall ou nuvem; FortiGate pode compor a solução quando pertinente." },
                    { title: "Governança e Proteção de Dados", problem: "Dados sem classificação, responsáveis, regras de acesso ou retenção claras.", deliverables: "Inventário do escopo, classificação, matriz de acesso, retenção e controles técnicos. Purview pode apoiar cenários Microsoft licenciados. O trabalho técnico não substitui assessoria jurídica para LGPD." },
                    { title: "Avaliação de Vulnerabilidades e Pentest", problem: "Exposições conhecidas apenas de forma parcial ou ainda não validadas.", deliverables: "Escopo autorizado, avaliação técnica, evidências, classificação e recomendações. Pentest inclui testes manuais controlados quando contratado; varredura automatizada não é pentest." },
                    { title: "Preparação para Incidentes e Recuperação", problem: "Falta de papéis, contatos, procedimentos e capacidade comprovada de recuperação.", deliverables: "Planos, fluxos de acionamento, exercícios, revisão de backup e testes de recuperação conforme escopo." },
                    { title: "Políticas e Conscientização", problem: "Regras desconhecidas ou comportamento de risco sem orientação prática.", deliverables: "Políticas, procedimentos, materiais de orientação e ações de conscientização adequadas ao público contratado." },
                ],
            },
            method: {
                eyebrow: "Método MaaS®",
                title: "Segurança como ciclo de gestão",
                intro: "A execução se concentra em Blindagem & Identidade e Orquestração & Governança, conectando Base Estrutural e Continuidade Empresarial quando o risco exigir.",
                steps: ["Diagnóstico", "Priorização", "Implementação de controles", "Validação", "Acompanhamento e evolução"],
                layersTitle: "Camadas relacionadas",
                layers: [
                    { title: "Blindagem & Identidade", text: "Camada principal para identidades, endpoints, colaboração e acesso." },
                    { title: "Orquestração & Governança", text: "Políticas, riscos, evidências, indicadores e prioridades executivas." },
                    { title: "Base Estrutural", text: "Entra em cena quando rede, nuvem ou arquitetura sustentam o controle." },
                    { title: "Continuidade Empresarial", text: "Integra recuperação, preparação e resiliência aos cenários relevantes." },
                ],
            },
            evidence: {
                eyebrow: "Entregáveis e evidências",
                title: "O que foi decidido, aplicado e validado",
                intro: "Os entregáveis são selecionados conforme o escopo, o ambiente e as responsabilidades acordadas.",
                items: ["Diagnóstico técnico", "Matriz de riscos", "Plano de ação priorizado", "Controles implementados", "Políticas e procedimentos", "Evidências de validação", "Relatório executivo", "Recomendações de evolução"],
                note: "Não há segurança absoluta. O objetivo é reduzir riscos de forma proporcional, aumentar visibilidade e preparar decisões e respostas.",
            },
            engagement: {
                eyebrow: "Formas de contratação",
                title: "Projeto pontual ou gestão contínua",
                projectTitle: "Projeto pontual",
                projectText: "Avaliação, implantação ou melhoria com início, fim, escopo e critérios de entrega definidos.",
                continuousTitle: "Gestão contínua",
                continuousText: "Acompanhamento, manutenção dos controles, indicadores e evolução conforme contrato, responsabilidades e SLA.",
                automationNote: "Monitoramento automatizado identifica eventos e gera alertas. Análise e resposta humana dependem do serviço, cobertura e SLA efetivamente contratados.",
            },
            faq: {
                eyebrow: "Perguntas frequentes",
                title: "Segurança sem promessas vagas",
                items: [
                    { question: "A avaliação de vulnerabilidades é um pentest?", answer: "Não. A avaliação identifica e analisa vulnerabilidades. O pentest acrescenta técnicas manuais e controladas para validar exploração dentro de um escopo formalmente autorizado." },
                    { question: "A Apix garante conformidade com a LGPD?", answer: "Não prometemos conformidade legal integral. Podemos apoiar tecnicamente a adequação e proteção de dados; decisões jurídicas devem contar com assessoria qualificada." },
                    { question: "O serviço inclui atendimento humano 24 horas?", answer: "Somente quando a cobertura, os canais e o SLA estiverem expressamente contratados. Monitoramento automatizado, geração de alertas e resposta humana são capacidades distintas." },
                    { question: "É necessário trocar todas as ferramentas?", answer: "Não necessariamente. O diagnóstico considera riscos, arquitetura, licenças e ferramentas existentes antes de recomendar mudanças." },
                    { question: "Posso contratar apenas uma frente?", answer: "Sim. Uma frente pode ser contratada como projeto pontual, desde que suas dependências e limites estejam claros no escopo." },
                ],
            },
            final: {
                title: "Comece pelos riscos que realmente importam",
                text: "Uma avaliação estruturada transforma exposição técnica em prioridades, controles e próximos passos claros.",
                primary: "Solicitar avaliação de segurança",
                secondary: "Conversar sobre um projeto",
            },
        },
    },
    en: {} as LocaleContent,
    es: {} as LocaleContent,
};

content.en = {
    shared: {
        projects: "Projects", security: "Information Security", services: "Services", architecture: "MaaS® Architecture", contact: "Contact",
        requestDiagnostic: "Request a diagnostic", talkProject: "Discuss this project", optionalContinuity: "Optional continuity",
        scopeNote: "The final composition is defined in the diagnostic and technical proposal.",
    },
    projects: {
        metadata: { title: "IT Projects with MaaS® Architecture", description: "Infrastructure, cloud, and security projects with defined scope, technical documentation, and acceptance criteria." },
        hero: { eyebrow: "Diagnostic → Project → Operations → Evolution", title: "IT Projects with MaaS® Architecture", subtitle: "We plan and implement infrastructure, cloud, and security improvements with a defined scope, documentation, and result validation.", primary: "Request a diagnostic", secondary: "Explore projects" },
        benefits: {
            eyebrow: "Clear engagement", title: "From a technical problem to a verifiable delivery", intro: "Each project starts with a concrete need and moves forward with documented responsibilities, decisions, and acceptance criteria.",
            items: [
                { title: "Defined scope", text: "Objectives, responsibilities, assumptions, and boundaries aligned before execution." },
                { title: "Business priorities", text: "Technical decisions ordered by risk, operational impact, and company context." },
                { title: "Change control", text: "Planned implementation with change records and a rollback plan when relevant." },
                { title: "Technical documentation", text: "Architecture, configurations, inventories, or procedures produced for the project." },
                { title: "Delivery validation", text: "Evidence and acceptance criteria defined to confirm the contracted outcome." },
                { title: "Organized transition", text: "Knowledge transfer and a structured handoff to the team or contracted operation." },
            ],
        },
        catalog: {
            eyebrow: "Project catalog", title: "Ten paths to evolve IT", intro: "Engage a one-off initiative or build a phased journey. Each project highlights its primary MaaS® layer and may involve other layers according to environment dependencies.", problem: "Problem addressed", audience: "Best suited for", deliverables: "Possible deliverables", layer: "Primary layer", expand: "View scope and deliverables",
            projects: [
                { name: "Secure and Governed Microsoft 365", problem: "Accounts, email, and documents without consistent controls.", audience: "Companies using Microsoft 365 that need to organize identities, permissions, and collaboration protection.", deliverables: ["Tenant review", "MFA and access policies subject to licensing", "Email protection", "Permission review", "Joiner and leaver procedures"], layer: "Shielding & Identity" },
                { name: "Secure and Organized Google Workspace", problem: "Unprotected accounts, uncontrolled sharing, and scattered files.", audience: "Organizations that need to standardize administration, access, and information lifecycle in Google Workspace.", deliverables: ["Administrative review", "MFA", "Shared drives", "Permissions and sharing rules", "Retention subject to licensing"], layer: "Shielding & Identity" },
                { name: "Backup and Disaster Recovery", problem: "Backups without a strategy or unproven recovery.", audience: "Environments where downtime or data loss requires clear recovery objectives and procedures.", deliverables: ["Workload assessment", "Recovery objectives", "Solution design and configuration", "Restore tests", "Documented procedures"], layer: "Business Continuity" },
                { name: "Intelligent Infrastructure Monitoring", problem: "Failures discovered only after they affect operations.", audience: "Companies that need visibility into infrastructure and critical services.", deliverables: ["Monitoring with relevant technologies such as Zabbix", "Grafana dashboards when applicable", "Alerts", "Documentation", "Knowledge transfer"], layer: "Orchestration & Governance" },
                { name: "Cloud Cost Optimization — FinOps", problem: "Cloud consumption without visibility and poorly sized resources.", audience: "Cloud operations that need to understand cost, capacity, and consumption ownership.", deliverables: ["Cost analysis", "Idle resource identification", "Sizing recommendations", "Commitment evaluation", "Budget controls"], layer: "Orchestration & Governance" },
                { name: "Server Modernization and Cloud Migration", problem: "Aging infrastructure, insufficient capacity, or difficulty scaling.", audience: "Environments that need to renew servers or virtualization, or adopt cloud with controlled risk.", deliverables: ["Dependency assessment", "Solution architecture", "Pilot when applicable", "Migration and validation", "Rollback plan"], layer: "Structural Foundation" },
                { name: "Secure Corporate Network and Site Connectivity", problem: "Unstable connectivity and lack of segmentation and control.", audience: "Companies with offices, branches, hybrid work, or distributed services.", deliverables: ["Network design", "Firewall and segmentation", "Corporate Wi-Fi", "VPN", "Site or cloud integration according to scope"], layer: "Structural Foundation" },
                { name: "Endpoint Protection and Device Management", problem: "Computers without centralized protection and administration.", audience: "Teams that need standardized security, configuration, and updates for corporate devices.", deliverables: ["Endpoint protection", "Device policies", "Encryption", "Update management", "Pilot and operating procedures"], layer: "Shielding & Identity" },
                { name: "Data Governance and Information Security", problem: "No criteria for access, sharing, and retention.", audience: "Organizations that need to understand their repositories and apply rules proportional to the information handled.", deliverables: ["Assessment of contracted repositories", "Information classification", "Access matrix", "Policies and retention", "Protection controls and user guidance"], layer: "Orchestration & Governance" },
                { name: "Vulnerability Assessment and Penetration Testing", problem: "Unknown or unvalidated technical exposure.", audience: "Environments that need to identify vulnerabilities or validate exploitability through authorized testing.", deliverables: ["Formal scope and authorization", "Automated assessment and technical analysis or penetration testing, as contracted", "Evidence and risk classification", "Recommendations", "Retest when included"], layer: "Shielding & Identity", note: "A vulnerability assessment identifies and analyzes exposure. Penetration testing adds controlled manual exploitation within the authorized scope; an automated scan is not equivalent to a penetration test." },
            ],
        },
        layers: { eyebrow: "MaaS® Architecture", title: "Four layers, one integrated view", intro: "The primary layer guides the project. Technical dependencies may connect the delivery to other layers without expanding scope without approval.", items: [
            { title: "Structural Foundation", text: "Network, connectivity, computing, and technical foundations." },
            { title: "Shielding & Identity", text: "Access, devices, collaboration, and security controls." },
            { title: "Business Continuity", text: "Recovery, resilience, and interruption readiness." },
            { title: "Orchestration & Governance", text: "Visibility, policies, indicators, and coordinated evolution." },
        ] },
        process: { eyebrow: "Delivery process", title: "Governance from discovery to handoff", items: [
            { title: "Diagnostic and assessment", text: "Understanding the environment, need, and relevant constraints." },
            { title: "Priorities and scope", text: "Definition of deliverables, responsibilities, assumptions, and acceptance." },
            { title: "Solution design", text: "Architecture, implementation plan, and technical decisions." },
            { title: "Governed implementation", text: "Execution with change control and impact communication." },
            { title: "Validation and documentation", text: "Testing, evidence, documentation, and open-item records." },
            { title: "Transition and evolution", text: "Knowledge transfer and continuity definition, when contracted." },
        ] },
        deliverables: { eyebrow: "Common deliverables", title: "Evidence to operate and decide", intro: "Artifacts are selected according to each project's type, size, and scope.", items: ["Scope and responsibilities", "Implementation plan", "Relevant documentation and inventory", "Validation evidence", "Open items and recommendations", "Knowledge transfer"], note: "Not every project includes the same documents, tools, or a monthly operation. The technical proposal records exactly what will be delivered." },
        continuity: { eyebrow: "After delivery", title: "MaaS® Operations & Support as optional continuity", text: "The project may end after validation and handoff. When appropriate, Apix can provide support, monitoring, and evolution under a separate contract with its own responsibilities and SLA.", link: "Explore MaaS® Operations & Support" },
        faq: { eyebrow: "Frequently asked questions", title: "Before starting a project", items: [
            { question: "Can I engage only one project?", answer: "Yes. A one-off project has its own scope, start, completion, and delivery criteria. Ongoing support is optional and contracted separately." },
            { question: "Does the diagnostic already define price and timeline?", answer: "The diagnostic gathers the information needed to size scope, dependencies, assumptions, investment, and schedule in a technical proposal." },
            { question: "Will the project interrupt operations?", answer: "Impacts and change windows are evaluated during planning. When relevant, the solution includes a pilot, communication, and rollback plan." },
            { question: "Can you work with our internal team or other vendors?", answer: "Yes, provided responsibilities, access, and interfaces are defined in the project scope and governance." },
            { question: "Does every project use all four MaaS® layers?", answer: "Each project has a primary layer. Other layers may be involved when dependencies exist, always within the approved scope." },
        ] },
        final: { title: "Which IT improvement needs to move forward?", text: "Start with a diagnostic to turn the need into clear priorities, scope, and next steps.", primary: "Request a diagnostic", secondary: "Talk on WhatsApp" },
    },
    security: {
        metadata: { title: "Information Security with MaaS® Governance", description: "Protect identities, devices, networks, and data with proportional controls, evidence, and structured evolution." },
        hero: { eyebrow: "Shielding, identity, and governance", title: "Information Security with MaaS® Governance", subtitle: "Protect identities, devices, and data with controls proportionate to your business, clear priorities, and structured follow-up.", primary: "Request a security assessment", secondary: "Explore practice areas" },
        risks: { eyebrow: "Risk in context", title: "Controls proportional to what must be protected", intro: "Security starts by understanding exposure, impact, and operational capacity—without alarmism or absolute promises.", items: ["Compromised accounts", "Unauthorized or excessive access", "Data exposure", "Vulnerable equipment", "Insecure configurations", "Lack of incident readiness", "Insufficient recovery"] },
        practices: { eyebrow: "Practice areas", title: "From identity to recovery", intro: "Practice areas are combined according to the diagnostic, available licensing, and approved scope.", problem: "What we address", possible: "Possible deliverables", items: [
            { title: "Identity and Access Control", problem: "Weak credentials, excessive privileges, and inconsistent joiner and leaver processes.", deliverables: "MFA, access review, administrative profiles, conditional policies, and procedures. Microsoft Entra may be used when relevant and licensed." },
            { title: "Email and Collaboration Protection", problem: "Phishing, inappropriate sharing, and weak email and file settings.", deliverables: "Policy review, email protection, sharing rules, and Microsoft 365 or Google Workspace configuration according to engagement and licensing." },
            { title: "Endpoint Protection", problem: "Devices without a protection, encryption, update, or centralized management baseline.", deliverables: "Device policies, encryption, protection, and management with technologies such as Defender and Intune when applicable." },
            { title: "Network and Cloud Security", problem: "Flat networks, exposed access, unreviewed rules, and inconsistent cloud configurations.", deliverables: "Segmentation, rule review, VPN, hardening, and firewall or cloud controls; FortiGate may be part of the solution when relevant." },
            { title: "Data Governance and Protection", problem: "Data without clear classification, ownership, access, or retention rules.", deliverables: "In-scope inventory, classification, access matrix, retention, and technical controls. Purview may support licensed Microsoft scenarios. Technical work does not replace legal advice for data protection laws." },
            { title: "Vulnerability Assessment and Penetration Testing", problem: "Exposure understood only partially or not yet validated.", deliverables: "Authorized scope, technical assessment, evidence, classification, and recommendations. Penetration testing includes controlled manual testing when contracted; automated scanning is not penetration testing." },
            { title: "Incident Readiness and Recovery", problem: "Missing roles, contacts, procedures, and proven recovery capability.", deliverables: "Plans, escalation flows, exercises, backup review, and recovery tests according to scope." },
            { title: "Policies and Awareness", problem: "Rules that are unknown or risky behavior without practical guidance.", deliverables: "Policies, procedures, guidance materials, and awareness actions suited to the contracted audience." },
        ] },
        method: { eyebrow: "MaaS® Method", title: "Security as a management cycle", intro: "Execution focuses on Shielding & Identity and Orchestration & Governance, connecting Structural Foundation and Business Continuity when risk requires it.", steps: ["Diagnostic", "Prioritization", "Control implementation", "Validation", "Follow-up and evolution"], layersTitle: "Related layers", layers: [
            { title: "Shielding & Identity", text: "Primary layer for identities, endpoints, collaboration, and access." },
            { title: "Orchestration & Governance", text: "Policies, risk, evidence, indicators, and executive priorities." },
            { title: "Structural Foundation", text: "Applies when network, cloud, or architecture supports the control." },
            { title: "Business Continuity", text: "Integrates recovery, readiness, and resilience into relevant scenarios." },
        ] },
        evidence: { eyebrow: "Deliverables and evidence", title: "What was decided, applied, and validated", intro: "Deliverables are selected according to scope, environment, and agreed responsibilities.", items: ["Technical diagnostic", "Risk matrix", "Prioritized action plan", "Implemented controls", "Policies and procedures", "Validation evidence", "Executive report", "Evolution recommendations"], note: "There is no absolute security. The goal is to reduce risk proportionately, increase visibility, and prepare decisions and responses." },
        engagement: { eyebrow: "Engagement models", title: "One-off project or continuous management", projectTitle: "One-off project", projectText: "Assessment, implementation, or improvement with a defined start, end, scope, and delivery criteria.", continuousTitle: "Continuous management", continuousText: "Monitoring, control maintenance, indicators, and evolution according to the contract, responsibilities, and SLA.", automationNote: "Automated monitoring detects events and generates alerts. Human analysis and response depend on the service, coverage, and SLA actually contracted." },
        faq: { eyebrow: "Frequently asked questions", title: "Security without vague promises", items: [
            { question: "Is a vulnerability assessment a penetration test?", answer: "No. An assessment identifies and analyzes vulnerabilities. A penetration test adds controlled manual techniques to validate exploitation within a formally authorized scope." },
            { question: "Does Apix guarantee legal compliance?", answer: "We do not promise complete legal compliance. We can provide technical support for data protection and control implementation; legal decisions require qualified counsel." },
            { question: "Does the service include 24-hour human response?", answer: "Only when coverage, channels, and SLA are expressly contracted. Automated monitoring, alert generation, and human response are distinct capabilities." },
            { question: "Do we need to replace every tool?", answer: "Not necessarily. The diagnostic considers risks, architecture, licensing, and existing tools before recommending changes." },
            { question: "Can I contract only one practice area?", answer: "Yes. A practice area can be engaged as a one-off project when its dependencies and boundaries are clear in the scope." },
        ] },
        final: { title: "Start with the risks that truly matter", text: "A structured assessment turns technical exposure into clear priorities, controls, and next steps.", primary: "Request a security assessment", secondary: "Discuss a project" },
    },
};

content.es = {
    shared: {
        projects: "Proyectos", security: "Seguridad de la Información", services: "Servicios", architecture: "Arquitectura MaaS®", contact: "Contacto",
        requestDiagnostic: "Solicitar diagnóstico", talkProject: "Conversar sobre este proyecto", optionalContinuity: "Continuidad opcional",
        scopeNote: "La composición final se define en el diagnóstico y la propuesta técnica.",
    },
    projects: {
        metadata: { title: "Proyectos de TI con Arquitectura MaaS®", description: "Proyectos de infraestructura, nube y seguridad con alcance definido, documentación técnica y criterios de aceptación." },
        hero: { eyebrow: "Diagnóstico → Proyecto → Operación → Evolución", title: "Proyectos de TI con Arquitectura MaaS®", subtitle: "Planificamos e implementamos mejoras en infraestructura, nube y seguridad, con alcance definido, documentación y validación de resultados.", primary: "Solicitar diagnóstico", secondary: "Explorar proyectos" },
        benefits: { eyebrow: "Contratación con claridad", title: "Del problema técnico a una entrega verificable", intro: "Cada proyecto nace de una necesidad concreta y avanza con responsabilidades, decisiones y criterios de aceptación registrados.", items: [
            { title: "Alcance definido", text: "Objetivos, responsabilidades, premisas y límites alineados antes de la ejecución." },
            { title: "Prioridades del negocio", text: "Decisiones técnicas ordenadas por riesgo, impacto operativo y contexto de la empresa." },
            { title: "Control de cambios", text: "Implementación planificada, con registro de cambios y plan de reversión cuando sea pertinente." },
            { title: "Documentación técnica", text: "Arquitectura, configuraciones, inventarios o procedimientos producidos según el proyecto." },
            { title: "Validación de la entrega", text: "Evidencias y criterios de aceptación definidos para confirmar el resultado contratado." },
            { title: "Transición organizada", text: "Transferencia de conocimiento y entrega estructurada al equipo o a la operación contratada." },
        ] },
        catalog: { eyebrow: "Catálogo de proyectos", title: "Diez caminos para evolucionar TI", intro: "Contrata una iniciativa puntual o compón una jornada por etapas. Cada proyecto destaca su capa MaaS® principal y puede involucrar otras capas según las dependencias del entorno.", problem: "Problema atendido", audience: "Indicado para", deliverables: "Entregables posibles", layer: "Capa principal", expand: "Ver alcance y entregables", projects: [
            { name: "Microsoft 365 Seguro y Gobernado", problem: "Cuentas, correos y documentos sin controles consistentes.", audience: "Empresas que usan Microsoft 365 y necesitan organizar identidades, permisos y protección de la colaboración.", deliverables: ["Revisión del tenant", "MFA y políticas de acceso según licenciamiento", "Protección de correo", "Revisión de permisos", "Procedimientos de altas y bajas"], layer: "Blindaje e Identidad" },
            { name: "Google Workspace Seguro y Organizado", problem: "Cuentas desprotegidas, uso compartido sin control y archivos dispersos.", audience: "Organizaciones que necesitan estandarizar administración, acceso y ciclo de vida de la información en Google Workspace.", deliverables: ["Revisión administrativa", "MFA", "Unidades compartidas", "Permisos y reglas de uso compartido", "Retención según licenciamiento"], layer: "Blindaje e Identidad" },
            { name: "Backup y Recuperación ante Desastres", problem: "Copias sin estrategia o recuperación no comprobada.", audience: "Entornos donde la indisponibilidad o pérdida de datos exige objetivos y procedimientos claros de recuperación.", deliverables: ["Levantamiento de cargas", "Objetivos de recuperación", "Diseño y configuración de la solución", "Pruebas de restauración", "Procedimientos documentados"], layer: "Continuidad Empresarial" },
            { name: "Monitoreo Inteligente de Infraestructura", problem: "Fallas descubiertas solo después de afectar la operación.", audience: "Empresas que necesitan visibilidad sobre infraestructura y servicios críticos.", deliverables: ["Monitoreo con tecnologías pertinentes como Zabbix", "Paneles con Grafana cuando aplique", "Alertas", "Documentación", "Transferencia de conocimiento"], layer: "Orquestación y Gobernanza" },
            { name: "Optimización de Costos en la Nube — FinOps", problem: "Consumo de nube sin visibilidad y recursos mal dimensionados.", audience: "Operaciones en nube que necesitan entender costos, capacidad y responsables del consumo.", deliverables: ["Análisis de costos", "Identificación de recursos ociosos", "Recomendaciones de dimensionamiento", "Evaluación de compromisos de consumo", "Controles presupuestarios"], layer: "Orquestación y Gobernanza" },
            { name: "Modernización de Servidores y Migración a la Nube", problem: "Infraestructura antigua, capacidad insuficiente o dificultad para crecer.", audience: "Entornos que necesitan renovar servidores o virtualización, o adoptar nube con riesgo controlado.", deliverables: ["Evaluación de dependencias", "Arquitectura de la solución", "Piloto cuando aplique", "Migración y validación", "Plan de reversión"], layer: "Base Estructural" },
            { name: "Red Corporativa Segura y Conectividad entre Sedes", problem: "Conectividad inestable y ausencia de segmentación y control.", audience: "Empresas con oficinas, sucursales, trabajo híbrido o servicios distribuidos.", deliverables: ["Diseño de red", "Firewall y segmentación", "Wi-Fi corporativo", "VPN", "Integración entre sedes o nube según alcance"], layer: "Base Estructural" },
            { name: "Protección de Endpoints y Gestión de Dispositivos", problem: "Equipos sin protección y administración centralizadas.", audience: "Equipos que necesitan estandarizar seguridad, configuración y actualización de los dispositivos corporativos.", deliverables: ["Protección de endpoints", "Políticas de dispositivos", "Cifrado", "Gestión de actualizaciones", "Piloto y procedimientos operativos"], layer: "Blindaje e Identidad" },
            { name: "Gobernanza de Datos y Seguridad de la Información", problem: "Ausencia de criterios de acceso, uso compartido y retención.", audience: "Organizaciones que necesitan conocer sus repositorios y aplicar reglas proporcionales a la información tratada.", deliverables: ["Levantamiento de repositorios contratados", "Clasificación de información", "Matriz de acceso", "Políticas y retención", "Controles de protección y orientación a usuarios"], layer: "Orquestación y Gobernanza" },
            { name: "Evaluación de Vulnerabilidades y Pentest", problem: "Exposición técnica desconocida o sin validar.", audience: "Entornos que necesitan identificar vulnerabilidades o validar su explotación mediante pruebas autorizadas.", deliverables: ["Alcance y autorización formal", "Evaluación automatizada y análisis técnico o pentest, según contratación", "Evidencias y clasificación de riesgos", "Recomendaciones", "Reprueba cuando esté incluida"], layer: "Blindaje e Identidad", note: "La evaluación de vulnerabilidades identifica y analiza exposiciones. El pentest añade pruebas manuales y controladas de explotación dentro del alcance autorizado; un escaneo automatizado no equivale a un pentest." },
        ] },
        layers: { eyebrow: "Arquitectura MaaS®", title: "Cuatro capas, una visión integrada", intro: "La capa principal orienta el proyecto. Las dependencias técnicas pueden conectar la entrega con otras capas sin ampliar el alcance sin aprobación.", items: [
            { title: "Base Estructural", text: "Red, conectividad, cómputo y fundamentos técnicos." },
            { title: "Blindaje e Identidad", text: "Accesos, dispositivos, colaboración y controles de seguridad." },
            { title: "Continuidad Empresarial", text: "Recuperación, resiliencia y preparación ante interrupciones." },
            { title: "Orquestación y Gobernanza", text: "Visibilidad, políticas, indicadores y evolución coordinada." },
        ] },
        process: { eyebrow: "Proceso de ejecución", title: "Gobernanza desde el inicio hasta la transición", items: [
            { title: "Diagnóstico y levantamiento", text: "Comprensión del entorno, la necesidad y las restricciones relevantes." },
            { title: "Prioridades y alcance", text: "Definición de entregables, responsabilidades, premisas y aceptación." },
            { title: "Diseño de la solución", text: "Arquitectura, plan de implementación y decisiones técnicas." },
            { title: "Implementación gobernada", text: "Ejecución con control de cambios y comunicación de impactos." },
            { title: "Validación y documentación", text: "Pruebas, evidencias, documentación y registro de pendientes." },
            { title: "Transición y evolución", text: "Transferencia de conocimiento y definición de continuidad, cuando se contrate." },
        ] },
        deliverables: { eyebrow: "Entregables comunes", title: "Evidencia para operar y decidir", intro: "Los artefactos se seleccionan según el tipo, tamaño y alcance de cada proyecto.", items: ["Alcance y responsabilidades", "Plan de implementación", "Documentación e inventario pertinentes", "Evidencias de validación", "Pendientes y recomendaciones", "Transferencia de conocimiento"], note: "No todos los proyectos incluyen los mismos documentos, herramientas o una operación mensual. La propuesta técnica registra exactamente lo que se entregará." },
        continuity: { eyebrow: "Después de la entrega", title: "Operación y Soporte MaaS® como continuidad opcional", text: "El proyecto puede finalizar tras la validación y transición. Cuando tenga sentido, Apix puede asumir soporte, seguimiento y evolución mediante un contrato separado, con responsabilidades y SLA propios.", link: "Conocer Operación y Soporte MaaS®" },
        faq: { eyebrow: "Preguntas frecuentes", title: "Antes de iniciar un proyecto", items: [
            { question: "¿Puedo contratar solo un proyecto?", answer: "Sí. El proyecto puntual tiene alcance, inicio, conclusión y criterios de entrega propios. El soporte posterior es opcional y se contrata por separado." },
            { question: "¿El diagnóstico ya define precio y plazo?", answer: "El diagnóstico reúne la información necesaria para dimensionar alcance, dependencias, premisas, inversión y cronograma en una propuesta técnica." },
            { question: "¿Los proyectos interrumpen la operación?", answer: "Los impactos y ventanas de cambio se evalúan durante la planificación. Cuando corresponde, la solución incluye piloto, comunicación y plan de reversión." },
            { question: "¿Trabajan con el equipo interno u otros proveedores?", answer: "Sí, siempre que responsabilidades, accesos e interfaces estén definidos en el alcance y la gobernanza del proyecto." },
            { question: "¿Todos los proyectos usan las cuatro capas MaaS®?", answer: "Cada proyecto tiene una capa principal. Otras capas pueden participar cuando existan dependencias, siempre dentro del alcance aprobado." },
        ] },
        final: { title: "¿Qué mejora de TI necesita salir del papel?", text: "Comienza con un diagnóstico para transformar la necesidad en prioridades, alcance y próximos pasos claros.", primary: "Solicitar diagnóstico", secondary: "Hablar por WhatsApp" },
    },
    security: {
        metadata: { title: "Seguridad de la Información con Gobernanza MaaS®", description: "Protección de identidades, dispositivos, redes y datos con controles proporcionales, evidencias y evolución estructurada." },
        hero: { eyebrow: "Blindaje, identidad y gobernanza", title: "Seguridad de la Información con Gobernanza MaaS®", subtitle: "Protege identidades, dispositivos y datos con controles proporcionales a tu negocio, prioridades claras y seguimiento estructurado.", primary: "Solicitar evaluación de seguridad", secondary: "Conocer las áreas" },
        risks: { eyebrow: "Riesgo con contexto", title: "Controles proporcionales a lo que debe protegerse", intro: "La seguridad comienza por entender exposición, impacto y capacidad operativa, sin alarmismo ni promesas absolutas.", items: ["Cuentas comprometidas", "Accesos indebidos o excesivos", "Exposición de datos", "Equipos vulnerables", "Configuraciones inseguras", "Falta de preparación ante incidentes", "Recuperación insuficiente"] },
        practices: { eyebrow: "Áreas de actuación", title: "De la identidad a la recuperación", intro: "Las áreas se combinan según el diagnóstico, el licenciamiento disponible y el alcance aprobado.", problem: "Qué tratamos", possible: "Entregables posibles", items: [
            { title: "Identidad y Control de Acceso", problem: "Credenciales débiles, privilegios excesivos y procesos inconsistentes de altas y bajas.", deliverables: "MFA, revisión de accesos, perfiles administrativos, políticas condicionales y procedimientos. Microsoft Entra puede utilizarse cuando sea pertinente y esté licenciado." },
            { title: "Protección de Correo y Colaboración", problem: "Phishing, uso compartido indebido y configuraciones débiles de correo y archivos.", deliverables: "Revisión de políticas, protección de correo, reglas de uso compartido y configuración de Microsoft 365 o Google Workspace según contratación y licenciamiento." },
            { title: "Protección de Endpoints", problem: "Dispositivos sin estándar de protección, cifrado, actualización o gestión centralizada.", deliverables: "Políticas de dispositivo, cifrado, protección y gestión con tecnologías como Defender e Intune cuando apliquen." },
            { title: "Seguridad de Redes y Nube", problem: "Redes planas, accesos expuestos, reglas sin revisión y configuraciones de nube inconsistentes.", deliverables: "Segmentación, revisión de reglas, VPN, hardening y controles en firewall o nube; FortiGate puede integrar la solución cuando sea pertinente." },
            { title: "Gobernanza y Protección de Datos", problem: "Datos sin clasificación, responsables, reglas de acceso o retención claras.", deliverables: "Inventario del alcance, clasificación, matriz de acceso, retención y controles técnicos. Purview puede apoyar escenarios Microsoft licenciados. El trabajo técnico no sustituye asesoría jurídica sobre protección de datos." },
            { title: "Evaluación de Vulnerabilidades y Pentest", problem: "Exposiciones conocidas solo parcialmente o aún no validadas.", deliverables: "Alcance autorizado, evaluación técnica, evidencias, clasificación y recomendaciones. El pentest incluye pruebas manuales controladas cuando se contrata; un escaneo automatizado no es pentest." },
            { title: "Preparación ante Incidentes y Recuperación", problem: "Falta de roles, contactos, procedimientos y capacidad de recuperación comprobada.", deliverables: "Planes, flujos de activación, ejercicios, revisión de backup y pruebas de recuperación según alcance." },
            { title: "Políticas y Concientización", problem: "Reglas desconocidas o conductas de riesgo sin orientación práctica.", deliverables: "Políticas, procedimientos, materiales de orientación y acciones de concientización adecuadas al público contratado." },
        ] },
        method: { eyebrow: "Método MaaS®", title: "Seguridad como ciclo de gestión", intro: "La ejecución se concentra en Blindaje e Identidad y Orquestación y Gobernanza, conectando Base Estructural y Continuidad Empresarial cuando el riesgo lo requiere.", steps: ["Diagnóstico", "Priorización", "Implementación de controles", "Validación", "Seguimiento y evolución"], layersTitle: "Capas relacionadas", layers: [
            { title: "Blindaje e Identidad", text: "Capa principal para identidades, endpoints, colaboración y acceso." },
            { title: "Orquestación y Gobernanza", text: "Políticas, riesgos, evidencias, indicadores y prioridades ejecutivas." },
            { title: "Base Estructural", text: "Interviene cuando red, nube o arquitectura sostienen el control." },
            { title: "Continuidad Empresarial", text: "Integra recuperación, preparación y resiliencia en los escenarios relevantes." },
        ] },
        evidence: { eyebrow: "Entregables y evidencias", title: "Lo que se decidió, aplicó y validó", intro: "Los entregables se seleccionan según el alcance, el entorno y las responsabilidades acordadas.", items: ["Diagnóstico técnico", "Matriz de riesgos", "Plan de acción priorizado", "Controles implementados", "Políticas y procedimientos", "Evidencias de validación", "Informe ejecutivo", "Recomendaciones de evolución"], note: "No existe seguridad absoluta. El objetivo es reducir riesgos de forma proporcional, aumentar visibilidad y preparar decisiones y respuestas." },
        engagement: { eyebrow: "Formas de contratación", title: "Proyecto puntual o gestión continua", projectTitle: "Proyecto puntual", projectText: "Evaluación, implantación o mejora con inicio, fin, alcance y criterios de entrega definidos.", continuousTitle: "Gestión continua", continuousText: "Seguimiento, mantenimiento de controles, indicadores y evolución según contrato, responsabilidades y SLA.", automationNote: "El monitoreo automatizado detecta eventos y genera alertas. El análisis y la respuesta humana dependen del servicio, la cobertura y el SLA efectivamente contratados." },
        faq: { eyebrow: "Preguntas frecuentes", title: "Seguridad sin promesas vagas", items: [
            { question: "¿La evaluación de vulnerabilidades es un pentest?", answer: "No. La evaluación identifica y analiza vulnerabilidades. El pentest añade técnicas manuales y controladas para validar explotación dentro de un alcance formalmente autorizado." },
            { question: "¿Apix garantiza el cumplimiento legal?", answer: "No prometemos cumplimiento legal integral. Podemos apoyar técnicamente la protección de datos y los controles; las decisiones jurídicas requieren asesoría cualificada." },
            { question: "¿El servicio incluye respuesta humana las 24 horas?", answer: "Solo cuando la cobertura, los canales y el SLA estén expresamente contratados. Monitoreo automatizado, generación de alertas y respuesta humana son capacidades distintas." },
            { question: "¿Es necesario cambiar todas las herramientas?", answer: "No necesariamente. El diagnóstico considera riesgos, arquitectura, licencias y herramientas existentes antes de recomendar cambios." },
            { question: "¿Puedo contratar solo un área?", answer: "Sí. Un área puede contratarse como proyecto puntual cuando sus dependencias y límites estén claros en el alcance." },
        ] },
        final: { title: "Comienza por los riesgos que realmente importan", text: "Una evaluación estructurada transforma la exposición técnica en prioridades, controles y próximos pasos claros.", primary: "Solicitar evaluación de seguridad", secondary: "Conversar sobre un proyecto" },
    },
};

export function getCommercialContent(locale: Locale): LocaleContent {
    return content[locale] ?? content.pt;
}


