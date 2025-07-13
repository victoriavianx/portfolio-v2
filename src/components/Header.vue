<script setup lang="ts">
import { ref, watch } from 'vue';

import Icon from '@/components/Icon.vue';

import router from '@/router';

type menuListType = { id: number; name: string; path: string; isSelected: boolean };

const menuList = ref<menuListType[]>([
  { id: 1, name: 'Início', path: '/', isSelected: true }, // sobre mim
  { id: 2, name: 'Experiência', path: '/experiencia', isSelected: false }, // trajetória professional
  // { id: 3, name: 'Desenvolvimento', path: '/desenvolvimento', isSelected: false }, // trajetória acadêmica
  { id: 4, name: 'Projetos', path: '/projetos', isSelected: false } // projetos feitos
]);
const menuItemSelected = ref<menuListType>();

const navigateTo = (itemId: number) => {
  const itemSelected = menuList.value.find(({ id }) => id === itemId);

  if (!itemSelected.isSelected) {
    itemSelected.isSelected = true;
    menuItemSelected.value = itemSelected;

    router.push(menuItemSelected.value.path);
  }
};

watch(menuItemSelected, () => {
  menuList.value = menuList.value.map((menuItem) => {
    return menuItem.id === menuItemSelected.value.id
      ? menuItemSelected.value
      : { ...menuItem, isSelected: false };
  });
});
</script>

<template>
  <header id="header" class="fixed z-10">
    <div class="flex flex-col justify-start">
      <h1 id="title" class="text-3xl lg:text-4xl 2xl:text-6xl tracking-wide">Victoria Viana</h1>
      <p id="subtitle" class="text-sm 2xl:text-base tracking-tighter">
        Desenvolvedora Web Full-Stack
      </p>

      <nav id="menu" class="text-xs md:text-sm my-5">
        <ul class="leading-7">
          <li
            v-for="{ id, name, isSelected } in menuList"
            :key="id"
            class="cursor-pointer md:mb-1 tracking-wider"
          >
            <button class="flex flex-row items-center" type="button" @click="navigateTo(id)">
              <Icon
                v-if="isSelected"
                kind="IMAGE"
                iconName="pink-shine"
                description="Ícone de estrela"
                customStyle="max-w-4"
              />
              <p v-else class="item-name">
                {{ name }}
              </p>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
#header {
  left: calc(var(--pad) * 2);
  top: calc(var(--pad) * 2);
}

#menu {
  font-family: var(--font-primary);
}

.item-name:hover {
  color: var(--bg-pink-400);
  transition: ease-in-out 0.5s;
}
</style>
