import {
  Antenna,
  BadgeCheck,
  BatteryCharging,
  CalendarDays,
  Camera,
  CheckCircle2,
  Clapperboard,
  ClipboardCheck,
  Headphones,
  Mic2,
  MonitorUp,
  PlaneTakeoff,
  Radio,
  Router,
  ShieldCheck,
  Trophy,
  UsersRound,
  Video,
  Wifi,
} from 'lucide-react'

export const whatsapp = {
  general:
    'https://wa.me/5591982920878?text=Ol%C3%A1%21%20Tenho%20interesse%20na%20transmiss%C3%A3o%20ao%20vivo%20do%20Cop%C3%A3o%20de%20Futsal%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20pacotes.',
  final:
    'https://wa.me/5591982920878?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20os%20pacotes%20de%20transmiss%C3%A3o%20ao%20vivo%20do%20Cop%C3%A3o%20de%20Futsal.',
}

export const highlights = [
  { icon: CalendarDays, label: '3 dias de cobertura' },
  { icon: Trophy, label: 'Início previsto às 8h' },
  { icon: UsersRound, label: 'Equipe técnica completa' },
  { icon: Mic2, label: 'Narração e reportagem' },
  { icon: Router, label: 'Starlink como backup' },
]

export const packages = [
  {
    name: 'Pacote 1 — 3 Câmeras Fixas',
    price: 'R$ 13.500,00',
    description:
      'Estrutura completa para transmissão ao vivo com três ângulos fixos, placar, corte ao vivo e equipe técnica dedicada.',
    icon: Camera,
    cta: 'Escolher Pacote 1',
    href:
      'https://wa.me/5591982920878?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20Pacote%201%20-%203%20C%C3%A2meras%20Fixas%20para%20a%20transmiss%C3%A3o%20do%20Cop%C3%A3o%20de%20Futsal.',
    items: [
      'Transmissão ao vivo dos jogos',
      '03 câmeras fixas',
      '01 operador para cada câmera',
      'Operador de vMix',
      'Operador de GC/placar',
      'Diretor técnico',
      'Apoio técnico/produção',
      'Estrutura de captação, corte e transmissão',
      'GC com placar e identificação das equipes',
      'Integração com narração, comentário e reportagem',
      'Starlink como backup de internet',
    ],
  },
  {
    name: 'Pacote 2 — 3 Câmeras Fixas + Câmera Sem Fio',
    price: 'R$ 16.500,00',
    badge: 'Mais recomendado',
    description:
      'O pacote ideal para uma transmissão mais dinâmica, com câmera sem fio na quadra para entradas próximas, bastidores, torcida, banco de reservas e reportagens.',
    icon: Radio,
    cta: 'Escolher Pacote 2',
    href:
      'https://wa.me/5591982920878?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20Pacote%202%20-%203%20C%C3%A2meras%20Fixas%20%2B%20C%C3%A2mera%20Sem%20Fio%20para%20a%20transmiss%C3%A3o%20do%20Cop%C3%A3o%20de%20Futsal.',
    recommended: true,
    items: [
      'Tudo do Pacote 1',
      '01 câmera sem fio na quadra',
      'Imagens próximas dos atletas',
      'Entradas com repórter',
      'Captação de torcida e banco de reservas',
      'Imagens de bastidores',
      'Mais dinamismo visual durante a transmissão',
      'Melhor integração com reportagem e intervalos',
    ],
  },
  {
    name: 'Pacote 3 — 3 Câmeras Fixas + Câmera Sem Fio + Drone',
    price: 'R$ 19.500,00',
    description:
      'A experiência mais completa, somando a estrutura de transmissão com câmera sem fio e drone para imagens aéreas, abertura, encerramento e entradas ao vivo quando viável.',
    icon: PlaneTakeoff,
    cta: 'Escolher Pacote 3',
    href:
      'https://wa.me/5591982920878?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20Pacote%203%20-%203%20C%C3%A2meras%20Fixas%20%2B%20C%C3%A2mera%20Sem%20Fio%20%2B%20Drone%20para%20a%20transmiss%C3%A3o%20do%20Cop%C3%A3o%20de%20Futsal.',
    items: [
      'Tudo do Pacote 2',
      'Captação com drone',
      'Possibilidade de entrada do drone ao vivo',
      'Imagens aéreas do ginásio',
      'Imagens da cidade e chegada do público',
      'Abertura e encerramento mais valorizados',
      'Diferencial visual para momentos especiais',
      'Operação condicionada à segurança, clima e autorização da organização',
    ],
  },
]

export const operationItems = [
  { icon: Clapperboard, label: 'Direção técnica' },
  { icon: MonitorUp, label: 'Operação de vMix' },
  { icon: ClipboardCheck, label: 'Operação de GC/placar' },
  { icon: Video, label: 'Operadores de câmera' },
  { icon: Headphones, label: 'Apoio técnico/produção' },
  { icon: Mic2, label: 'Integração com narradores e comentaristas' },
  { icon: Antenna, label: 'Suporte para repórteres' },
  { icon: Wifi, label: 'Backup de internet via Starlink' },
  { icon: BadgeCheck, label: 'Estrutura de transmissão ao vivo' },
  { icon: BatteryCharging, label: 'Equipamentos de captação e corte' },
]

export const responsibilities = [
  'Hospedagem da equipe',
  'Alimentação da equipe',
  'Combustível de retorno para Bragança',
  'Internet principal no local',
  'Espaço adequado para montagem da central técnica',
  'Energia elétrica estável',
  'Equipe de narração, comentário e reportagem',
  'Informações oficiais para atualização de placar, equipes e dados do jogo',
]

export const CheckIcon = CheckCircle2
export const ShieldIcon = ShieldCheck
