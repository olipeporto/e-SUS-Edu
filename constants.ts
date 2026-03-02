import {
  Users,
  Calendar,
  Home,
  Activity,
  ClipboardList
} from 'lucide-react';
import { TutorialModule } from './types';

export const TUTORIAL_MODULES: TutorialModule[] = [
  {
    id: 'atendimentos',
    title: 'Gestão de Atendimentos',
    description: 'Fluxo completo: Lista de Espera, Escuta Inicial, Vacinação, SOAP e Finalização.',
    icon: ClipboardList,
    color: 'text-emerald-600',
    links: [
      { title: 'Atendimentos: e-SUS APS', url: 'https://sisaps.saude.gov.br/sistemas/esusaps/docs/manual/PEC/PEC_06_atendimentos' }
    ],
    videos: [
      {
        title: 'Registrar a escuta inicial',
        url: 'https://www.youtube.com/watch?v=UihP7WCF2nw&list=PLlteHuqLkt1Bztf0AptHNOjspVqoNeWhX&index=6'
      },
      {
        title: 'Preencher o SOAP',
        url: 'https://www.youtube.com/watch?v=EToEEQIx0vg&list=PLlteHuqLkt1Bztf0AptHNOjspVqoNeWhX&index=8'
      },
      {
        title: 'Registrar vacina aplicada',
        url: 'https://www.youtube.com/watch?v=X9QXn_BRL50&list=PLlteHuqLkt1Bztf0AptHNOjspVqoNeWhX&index=19'
      },
      {
        title: 'Exluir registro de vacina',
        url: 'https://www.youtube.com/watch?v=ch9jVbMwO4c&list=PLlteHuqLkt1Bztf0AptHNOjspVqoNeWhX&index=21'
      }
    ],
    steps: [
      {
        title: 'Lista de Atendimentos',
        content: [
          'A porta de entrada para os fluxos de trabalho na unidade.',
          'Funcionalidades: Busca (Nome, CPF, CNS), Filtros e Ordenação (por Risco ou Chegada).',
          'Status: Barra colorida indica a situação atual (Aguardando, Em atendimento, Finalizado).',
          'Ações: Iniciar Escuta Inicial, Vacinação ou Atendimento (SOAP).'
        ],
        icon: 'list',
        images: [
          'https://sisaps.saude.gov.br/sistemas/esusaps/assets/images/pec_image306-4a613b7fd7afd250509940aa6f4d926e.png',
          'https://sisaps.saude.gov.br/sistemas/esusaps/assets/images/pec_image310-ab8bbdd87ba70499509006306049b24b.png'
        ]
      },
      {
        title: 'Escuta Inicial',
        content: [
          'Primeiro acolhimento da demanda espontânea.',
          'Dados Obrigatórios: Motivo da Consulta (CIAP2) e Classificação de Risco.',
          'Classificação de Risco: Define a prioridade (Vermelho, Amarelo, Verde, Azul).',
          'Desfecho: Liberar cidadão (resolvido na escuta), Agendar consulta futura ou Adicionar à lista para atendimento no dia.'
        ],
        icon: 'stethoscope',
        images: [
          'https://sisaps.saude.gov.br/sistemas/esusaps/assets/images/pec_image333-a5230c08db1c461d28df000beb552ece.png'
        ]
      },
      {
        title: 'Vacinação',
        content: [
          'Registro de imunobiológicos do PNI.',
          'Ações: Registrar dose aplicada, Transcrição de caderneta (vacinas antigas) e Aprazamento (agendar próxima dose).',
          'Alerta: O sistema avisa automaticamente sobre vacinas em atraso.',
          'Acesso: Pode ser iniciado via "Realizar Vacinação" na lista ou dentro de um atendimento.'
        ],
        icon: 'syringe',
        images: [
          'https://sisaps.saude.gov.br/sistemas/esusaps/assets/images/pec_image343-033797c130c8ec9c46e25d15668bead8.png'
        ]
      },
      {
        title: 'Folha de Rosto',
        content: [
          'Sumário clínico acessível dentro do prontuário.',
          'Exibe: Medições recentes (Sinais Vitais), Alergias, Problemas/Condições (Ativos/Latentes) e Medicamentos em uso.',
          'Objetivo: Fornecer uma visão rápida do histórico do paciente para apoiar a decisão clínica.'
        ],
        icon: 'file-text',
        images: [
          'https://sisaps.saude.gov.br/sistemas/esusaps/assets/images/pec_image893-42cf113cc25b6b8fef92b8238c545d74.png'
        ]
      },
      {
        title: 'Método SOAP',
        content: [
          'Estrutura padrão do registro clínico:',
          'S (Subjetivo): Queixas, sentimentos e relato do paciente.',
          'O (Objetivo): Exame físico, sinais vitais e dados mensuráveis.',
          'A (Avaliação): Diagnóstico, hipóteses e códigos (CID10/CIAP2).',
          'P (Plano): Prescrições, solicitações de exames, procedimentos e orientações.'
        ],
        icon: 'clipboard'
      },
      {
        title: 'Finalização do Atendimento',
        content: [
          'Etapa conclusiva obrigatória do registro.',
          'Registros finais: Procedimentos realizados (Administrativos ou Clínicos) e Notificação de Agravos.',
          'Desfecho: Liberar cidadão, Manter na lista (para passar por outro profissional) ou Agendar retorno.',
          'Racionalidade em Saúde: Campo para informar práticas integrativas/complementares.'
        ],
        icon: 'check-square',
        images: [
          'https://sisaps.saude.gov.br/sistemas/esusaps/assets/images/pec_image1092-2ed7ea878ff8b1ad140272340218a9ab.png'
        ]
      }
    ]
  },
  {
    id: 'unificacao',
    title: 'Unificação de Cadastros',
    description: 'Aprenda a resolver multiplicidade de cadastros unificando registros do e-SUS APS e CDS.',
    icon: Users,
    color: 'text-orange-500',
    links: [
      { title: 'Processo de seleção de cadastros a serem unificados: e-SUS APS', url: 'https://sisaps.saude.gov.br/sistemas/esusaps/docs/manual/PEC/PEC_09_gestao_cadastros#92-processo-de-sele%C3%A7%C3%A3o-de-cadastros-a-serem-unificados' }
    ],
    videos: [
      {
        title: 'Atualizar um cadastro existente',
        url: 'https://www.youtube.com/watch?v=aXBXBJkdVIU&list=PLlteHuqLkt1Bztf0AptHNOjspVqoNeWhX&index=5'
      }
    ],
    steps: [
      {
        title: 'O que é a Unificação?',
        content: [
          'A Unificação de Cadastros é uma etapa crucial da Gestão de Cadastros.',
          'Objetivo: Resolver situações de multiplicidade, unificando automaticamente registros de cadastro e atendimento.',
          'Abrangência: Prontuário Eletrônico e-SUS APS e CDS.',
          'Acesso Restrito: Apenas profissionais com perfil de "Gerente de UBS" ou gerente de serviços de saúde.'
        ],
        icon: 'info'
      },
      {
        title: 'Passo 1: Seleção dos Cadastros',
        content: [
          'Na tela inicial de "Unificação de cadastros", localize a lista de resultados.',
          'Utilize o checkbox (caixa de seleção) no lado esquerdo para marcar os cadastros duplicados que devem ser unidos.'
        ],
        icon: 'check'
      },
      {
        title: 'Passo 2: Cadastro Principal',
        content: [
          'Após selecionar os duplicados, você deve definir qual será o "Cadastro Principal".',
          'Importância: O principal define os dados demográficos (Nome, Data de Nascimento, Nome da Mãe).',
          'Dica: Escolha o cadastro com os dados mais atuais e corretos.'
        ],
        icon: 'star'
      },
      {
        title: 'Passo 3: CNS e Prontuário',
        content: [
          'CNS: O sistema escolhe automaticamente o Cartão Nacional de Saúde, priorizando o CNS definitivo.',
          'Unificação Clínica: Todos os registros clínicos (prontuários) de ambos os cadastros serão fundidos em um único histórico.',
          'Nada é perdido: O histórico de atendimentos é preservado.'
        ],
        icon: 'merge'
      },
      {
        title: 'Passo 4: Confirmação',
        content: [
          'Clique em "Unificar cadastros" para ver uma prévia.',
          'Revise os dados resultantes com atenção.',
          'Se estiver tudo correto, clique em "Confirmar unificação".',
          'Atenção: A ação é de alta responsabilidade.'
        ],
        note: 'Cadastros unificados recebem uma marcação específica nas buscas futuras.',
        icon: 'check-circle'
      }
    ]
  },
  {
    id: 'agenda',
    title: 'Gestão da Agenda',
    description: 'Tutoriais sobre como agendar consultas e reservar horários para profissionais.',
    icon: Calendar,
    color: 'text-blue-600',
    links: [
      { title: 'Agenda: e-SUS APS', url: 'https://sisaps.saude.gov.br/sistemas/esusaps/docs/manual/PEC/PEC_05_agenda' }
    ],
    videos: [
      {
        title: 'Agendar uma consulta',
        url: 'https://www.youtube.com/watch?v=h-zavM_HYjA&list=PLlteHuqLkt1Bztf0AptHNOjspVqoNeWhX&index=3'
      }
    ],
    steps: [
      {
        title: 'Configuração Prévia',
        content: [
          'Antes de agendar, a agenda deve ser configurada.',
          'Responsável: Perfil "Coordenador da UBS".',
          'Função: Definir e ajustar os horários de trabalho dos profissionais.'
        ],
        icon: 'settings'
      },
      {
        title: 'Agendar uma Consulta',
        content: [
          '1. Selecione o profissional desejado.',
          '2. Navegue até a data correta.',
          '3. Clique no horário específico vago.',
          '4. Selecione o tipo "Consulta".'
        ],
        icon: 'calendar'
      },
      {
        title: 'Identificando o Cidadão',
        content: [
          'Busque o cidadão por Nome, CNS ou Data de Nascimento.',
          'Se não encontrar: É possível realizar o "Cadastro Rápido" no momento do agendamento.',
          'Campo Observações: Use para anotações prévias necessárias.',
          'Clique em "Salvar" para confirmar.'
        ],
        icon: 'user-search'
      },
      {
        title: 'Reservar Horários',
        content: [
          'Objetivo: Bloquear a agenda quando o profissional não estiver disponível para consultas (ex: reuniões).',
          'Como fazer: No horário desejado, selecione o tipo "Reserva" ou "Entre profissionais".',
          'Defina o horário inicial e final do bloqueio.',
          'Motivo: Selecione (Atividade coletiva, Reunião, etc) e salve.'
        ],
        icon: 'lock'
      }
    ]
  },
  {
    id: 'cadastro',
    title: 'Cadastros da APS',
    description: 'Guia completo sobre Cadastro de Imóvel, Família e Cidadão Individual.',
    icon: Home,
    color: 'text-orange-500',
    links: [
      { title: 'Cadastro de APS: e-SUS APS', url: `https://sisaps.saude.gov.br/sistemas/esusaps/docs/manual/TERRITORIO/territorio_03` }
    ],
    videos: [
      {
        title: 'Atualizar cadastro das famílias e cidadãos no app e-SUS Território',
        url: 'https://www.youtube.com/watch?v=Wh9GKY-w9DI&list=PLlteHuqLkt1DngvAKq8gbSCeenyto8PoK&index=20'
      },
      {
        title: 'Cadastrar família e cidadãos no app e-SUS Território',
        url: 'https://www.youtube.com/watch?v=FqVWosfRbfE&list=PLlteHuqLkt1DngvAKq8gbSCeenyto8PoK&index=35'
      },
      {
        title: 'Cadastrar imóvel no app e-SUS Território',
        url: 'https://www.youtube.com/watch?v=jm-XXzWnJEs&list=PLlteHuqLkt1DngvAKq8gbSCeenyto8PoK&index=26'
      },
      {
        title: 'Editar e unificar logradouro no app e-SUS Território',
        url: 'https://www.youtube.com/watch?v=VbSiWcDpv48&list=PLlteHuqLkt1DngvAKq8gbSCeenyto8PoK&index=23'
      },
      {
        title: 'Registrar visita domiciliar à família no app e-SUS Território',
        url: 'https://www.youtube.com/watch?v=bNJvKhMuhIY&list=PLlteHuqLkt1DngvAKq8gbSCeenyto8PoK&index=21'
      },
      {
        title: 'Registrar visita domiciliar ao cidadão no app e-SUS Território',
        url: 'https://www.youtube.com/watch?v=k3zKZTd4gGM&list=PLlteHuqLkt1DngvAKq8gbSCeenyto8PoK&index=22'
      }
    ],
    steps: [
      {
        title: 'Visão Geral',
        content: [
          'O cadastro estende o CadSUS com dados sociais, econômicos e sanitários.',
          'Dimensões: Imobiliária, Territorial, Familiar e Individual.',
          'Atualização: Cadastros devem ser atualizados a cada 24 meses.'
        ],
        icon: 'info'
      },
      {
        title: 'Cadastro de Imóvel',
        content: [
          'Clique no "+" para adicionar novo imóvel.',
          'Etapa 1: Endereço (Tipo, Logradouro, CEP, Microárea).',
          'Etapa 2: Condições de moradia (Abastecimento de água, Destino do lixo).',
          'Etapa 3: Localização no mapa (GPS).',
          'Tipos Especiais: Abrigos, Delegacias, Comércios, Escolas.'
        ],
        note: 'Em caso de recusa, marque "Adicionar Recusa", mas preencha a identificação básica do imóvel.',
        icon: 'home'
      },
      {
        title: 'Cadastro de Família',
        content: [
          'Vincule as pessoas a um imóvel.',
          'Diferencial: Permite detalhamento maior que a ficha de papel.',
          'Funções: Adicionar Família, Editar Família, informar "Família Mudou".',
          'Responsável: Defina sempre o Responsável Familiar.'
        ],
        icon: 'users'
      },
      {
        title: 'Cadastro do Cidadão (Individual)',
        content: [
          'Utilizado para características sociodemográficas e de saúde.',
          '5 Etapas:',
          '1. Identificação (CPF/CNS essenciais).',
          '2. Contato e Filiação.',
          '3. Sociodemográfico (Escolaridade, Ocupação).',
          '4. Condições de Saúde (Doenças, uso de álcool/drogas).',
          '5. Socioeconômico.'
        ],
        icon: 'user'
      },
      {
        title: 'Situação de Rua',
        content: [
          'Se o cidadão for cadastrado com "Situação de moradia = Rua", uma 6ª etapa será habilitada.',
          'Preencha as questões específicas sobre a condição de rua.',
          'Recusa: Cidadãos também podem recusar o cadastro, mas o atendimento na UBS é garantido mesmo assim.'
        ],
        icon: 'alert'
      }
    ]
  },
  {
    id: 'acompanhamento',
    title: 'Acompanhamentos',
    description: 'Monitoramento de condições de saúde, gestantes, e gestão territorial.',
    icon: Activity,
    color: 'text-blue-600',
    links: [
      { title: 'Acompanhamentos: e-SUS APS', url: 'https://sisaps.saude.gov.br/sistemas/esusaps/docs/manual/PEC/PEC_10_acompanhamento_condicoes_saude' }
    ],
    videos: [
      { title: 'placeholder', url: '#' }
    ],
    steps: [
      {
        title: 'Módulo Acompanhamentos',
        content: [
          'Ferramenta para ESFs e Gestores.',
          'Objetivo: Visualização otimizada para monitorar situações de saúde no território.',
          'Recursos: Filtros por Microárea e Listas Temáticas.'
        ],
        icon: 'bar-chart'
      },
      {
        title: 'Listas Temáticas',
        content: [
          'Geral: Todos os cadastrados.',
          'Gestantes e Puerpério: Pré-natal, idade gestacional.',
          'Pessoa Idosa: Filtro IVCF-20 (risco), visitas domiciliares.',
          'Saúde da Mulher: Rastreio de câncer, testes rápidos.',
          'Hipertensão e Diabetes: Controle de medições e consultas.',
          'Desenvolvimento Infantil: 0 a 19 anos.'
        ],
        icon: 'list'
      },
      {
        title: 'Filtros Avançados',
        content: [
          'Condições: Busca por CIAP2 e CID10.',
          'Identidade: Filtro por sexo e identidade de gênero.',
          'Faixa Etária: Criança, Adolescente, Adulto, Idoso.',
          'TRIA: Risco de Insegurança Alimentar (últimos 6 ou 12 meses).'
        ],
        icon: 'filter'
      },
      {
        title: 'Acompanhamento do Território',
        content: [
          'Visão intuitiva da organização territorial.',
          'Filtros de Status: Cadastros incompletos, desatualizados ou não visitados recentemente.',
          'Indicadores: Exibe porcentagens de cobertura e atualização.',
          'Hierarquia: Gerentes veem a unidade; Equipes veem seus cidadãos vinculados.'
        ],
        icon: 'map'
      }
    ]
  }
];