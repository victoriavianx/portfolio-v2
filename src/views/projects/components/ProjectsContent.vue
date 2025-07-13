<script setup lang="ts">
import { type projectItemList, monthsNames } from '../interfaces';

const projectsList: projectItemList[] = [
  {
    project: 'Komercio',
    date: new Date('10/1/2022'),
    link: 'https://github.com/victoriavianx/komercio'
  },
  {
    project: 'API Crud',
    date: new Date('9/1/2022'),
    link: 'https://github.com/victoriavianx/crud-ts'
  },
  {
    project: 'Kenziehub',
    date: new Date('7/1/2022'),
    link: 'https://kenzie-hub.netlify.app/'
  },
  {
    project: 'Burguer',
    date: new Date('6/1/2022'),
    link: 'https://vic-burguer.netlify.app/'
  },
  {
    project: 'Nukenzie',
    date: new Date('6/1/2022'),
    link: 'https://nukenzie.netlify.app/'
  }
];

const formatPeriodDate = (periodDate: Date) => {
  const monthIndex = periodDate.getMonth();
  const monthName = monthsNames.find((month, index) => (index === monthIndex ? month : ''));

  return `${monthName}/${periodDate.getFullYear()}`;
};
</script>

<template>
  <div id="content" class="fixed z-10">
    <ul id="list" class="overflow-y-scroll max-h-80">
      <li id="item" v-for="({ project, date, link }, index) in projectsList" :key="index">
        <a class="flex flex-col" target="_blank" :href="link">
          <h2 class="text-[42px] h-14 md:text-[72px] md:h-[5.5rem] text-right italic">
            {{ project }}
          </h2>
          <p class="text-xs md:text-sm text-right font-light">
            {{ formatPeriodDate(date) }}
          </p>
        </a>
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
