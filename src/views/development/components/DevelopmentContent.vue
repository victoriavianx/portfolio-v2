<script setup lang="ts">
import type { developmentItemList } from '../interfaces';

const professionalExperiencesList: developmentItemList[] = [
  {
    course: 'Desenvolvimento Web Full-Stack',
    institute: 'Kenzie Academy Brasil',
    period: {
      start: new Date('11/1/2021'),
      end: new Date('11/1/2022')
    },
    description:
      'Curso de 2.000 horas de Desenvolvimento Full Stack que abrange tecnologias Front End e Back End além de soft skills necessárias para o mercado de trabalho. Entre as linguagens e tecnologias aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React, Node.js, Python (Django) e SQL.'
  }
];

const formatPeriodDate = (periodDate: Date) => {
  return `${periodDate.getMonth() + 1}/${periodDate.getFullYear()}`;
};
</script>

<template>
  <div id="content" class="fixed z-10 w-full max-w-64 sm:max-w-80 md:max-w-[28rem]">
    <ul id="list" class="overflow-y-scroll max-h-80">
      <li
        id="item"
        v-for="({ course, institute, period, description }, index) in professionalExperiencesList"
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
                <h2 class="text-md lg:text-lg">{{ course }},</h2>
                <span class="text-xs lg:text-sm font-primary tracking-tight">{{ institute }}</span>
              </div>
              <p class="text-sm lg:text-base tracking-tight pt-2">
                {{ description }}
              </p>
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
