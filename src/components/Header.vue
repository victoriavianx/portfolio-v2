<script setup lang="ts">
const menuList = [
  'Início', // sobre mim
  'Trajetória', // trajetória professional
  'Desenvolvimento', // trajetória acadêmica
  'Projetos' // projetos feitos
]
</script>

<template>
  <header id="header" class="fixed z-10">
    <div class="flex flex-col justify-start">
      <h1 id="title" class="text-3xl lg:text-4xl 2xl:text-6xl tracking-wide">Victoria Viana</h1>
      <p id="subtitle" class="text-sm 2xl:text-base tracking-tighter">
        Desenvolvedora Web Full-Stack
      </p>

      <nav id="menu" class="text-sm my-5">
        <ul class="leading-7">
          <li v-for="(listName, index) in menuList" :key="index" class="underline-hover mb-1">
            {{ listName }}
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
  font-family: var(--font-secondary);
}

.underline-hover {
  padding-bottom: 0.15rem;
  position: relative;
}

.underline-hover::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    var(--bg-pink-400),
    var(--bg-tertiary),
    var(--bg-primary)
  );
  transition: width 0.25s ease-out;
}

.underline-hover:hover::before {
  width: 50%;
  height: 2px;
  background-color: var(--bg-pink-400);
}
</style>
