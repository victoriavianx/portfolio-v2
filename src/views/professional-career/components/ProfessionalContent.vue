<script setup lang="ts">
import type { itemList } from '../interfaces';

const professionalExperiencesList: itemList[] = [
  {
    jobPosition: 'Desenvolvedora Web Full-Stack',
    enterprise: 'Espresso Labs',
    period: {
      start: new Date('10/1/2022'),
      end: new Date('09/1/2026')
    },
    description:
      'Construção e manutenção de aplicações web utilizando NestJS no backend e Vue.js no frontend, garantindo interfaces fluidas e alta performance. Condução de demandas e tarefas do ciclo de desenvolvimento ágil por meio de ferramentas de gerenciamento, assegurando eficiência e organização de sprints. Aplicação de tecnologias modernas para suporte à codificação, otimização de performance e entrega contínua de valor ao produto.',
    skills: ['JavaScript', 'TypeScript', 'Vue.js', 'Nest.js', 'SQL', 'Google Cloud Platform']
  },
  {
    jobPosition: 'Peer Coach (Monitoria)',
    enterprise: 'Kenzie Academy',
    period: {
      start: new Date('5/1/2022'),
      end: new Date('10/1/2022')
    },
    description:
      'Prestação de assistência individual e em grupo, realizando acompanhamento de progresso por meio de reuniões periódicas e alinhamento de expectativas. Esclarecimento de dúvidas, correção de atividades e suporte operacional aos novos integrantes.',
    skills: ['JavaScript', 'HTML', 'CSS', 'Python', 'Node.js', 'React', 'Django']
  },
  {
    jobPosition: 'Estagiária do Ensino Médio',
    enterprise: 'Ministério Público do Paraná',
    period: {
      start: new Date('4/1/2019'),
      end: new Date('12/1/2020')
    },
    description:
      'Suporte direto às Promotorias de Justiça e atuação na Coordenação Administrativa dos Fóruns de Justiça. Recepção e orientação ao público em geral, prestando informações com clareza e empatia. Organização de arquivos, controle de rotinas de secretaria e apoio na tramitação de expedientes.'
  }
];

const formatPeriodDate = (periodDate: Date) => {
  return `${periodDate.getMonth() + 1}/${periodDate.getFullYear()}`;
};
</script>

<template>
  <div id="content" class="fixed z-10 w-full max-w-64 sm:max-w-80 md:max-w-[30rem]">
    <ul id="list" class="overflow-y-scroll max-h-72">
      <li
        id="item"
        v-for="(
          { jobPosition, enterprise, period, description, skills }, index
        ) in professionalExperiencesList"
        :key="index"
        class="py-2"
      >
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:max-w-48 md:pr-5">
            <p class="text-xs lg:text-sm pt-1 font-light font-secondary md:text-end">
              {{ formatPeriodDate(period.start) }}
              <span class="px-1">&#822;</span>
              {{ period.end ? formatPeriodDate(period.end) : 'Atualmente' }}
            </p>
          </div>
          <div class="w-full">
            <div>
              <div class="flex flex-col">
                <h2 class="text-md lg:text-lg">{{ jobPosition }},</h2>
                <span class="text-xs lg:text-sm font-primary tracking-tight">{{ enterprise }}</span>
              </div>
              <p class="text-sm lg:text-base tracking-tight pt-2">
                {{ description }}
              </p>
            </div>
            <div v-if="skills && skills.length" class="pt-2">
              <ul class="flex flex-wrap justify-start">
                <li
                  v-for="(name, index) in skills"
                  :key="index"
                  class="bg-pink py-1.5 px-2.5 my-1 rounded-3xl mr-1.5"
                >
                  <p class="text-xs text-center font-bold text-pink-500">
                    {{ name }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
#content {
  right: calc(var(--pad) * 2);
  bottom: calc(var(--pad) * 2);
}

/* Hide scrollbar for Chrome, Safari and Opera */
#list::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#list {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.font-primary {
  font-family: var(--font-primary);
}

.font-secondary {
  font-family: var(--font-secondary);
}

.bg-pink {
  background-color: rgba(244, 114, 182, 0.5);
}
</style>
