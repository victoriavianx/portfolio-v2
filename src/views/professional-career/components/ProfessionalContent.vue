<script setup lang="ts">
import type { itemList } from '../interfaces'

const professionalExperiencesList: itemList[] = [
  {
    jobPosition: 'Desenvolvedora Web Full-Stack',
    enterprise: 'Espresso Labs',
    period: {
      start: new Date('10/1/2022')
    },
    description: 'Lorem ipsum.',
    skills: ['JavaScript', 'TypeScript', 'Vue.js', 'Nest.js']
  },
  {
    jobPosition: 'Peer Coach (Monitoria)',
    enterprise: 'Kenzie Academy',
    period: {
      start: new Date('5/1/2022'),
      end: new Date('10/1/2022')
    },
    description: 'Responsável por prestar assistência aos novos alunos dos primeiros módulos.',
    skills: ['JavaScript', 'HTML', 'CSS', 'Python', 'Node.js', 'React']
  },
  {
    jobPosition: 'Estagiária do Ensino Médio',
    enterprise: 'Ministério Público do Paraná',
    period: {
      start: new Date('4/1/2019'),
      end: new Date('12/1/2020')
    },
    description:
      'Responsável em dar apoio para as Promotorias de Justiça, atuar na Coordenação Administrativa dos Fóruns de Justiça e atender o público em geral.'
  }
]

const formatPeriodDate = (periodDate: Date) => {
  return `${periodDate.getMonth() + 1}/${periodDate.getFullYear()}`
}
</script>

<template>
  <div id="content" class="fixed z-10 w-full max-w-[28rem]">
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
            <p class="text-md pt-0.5 font-light font-secondary text-end">
              {{ formatPeriodDate(period.start) }}
              <span class="px-1">&#822;</span>
              {{ period.end ? formatPeriodDate(period.end) : 'Atualmente' }}
            </p>
          </div>
          <div class="w-full">
            <div class="">
              <div class="flex flex-col">
                <h2 class="text-lg">{{ jobPosition }},</h2>
                <span class="text-sm font-primary tracking-tight">{{ enterprise }}</span>
              </div>
              <p class="tracking-tight pt-2">
                {{ description }}
              </p>
            </div>
            <div v-if="skills && skills.length" class="pt-2">
              <ul class="flex flex-row max-w-32">
                <li
                  v-for="(name, index) in skills"
                  :key="index"
                  class="bg-pink py-1.5 px-2.5 rounded-3xl mr-1.5"
                >
                  <p class="text-xs font-bold text-pink-500">
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
