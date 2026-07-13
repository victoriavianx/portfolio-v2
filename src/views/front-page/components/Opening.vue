<script setup lang="ts"></script>

<template>
  <div id="about" class="fixed z-10 w-full max-w-64 sm:max-w-80 overflow-y-scroll max-h-80">
    <p class="tracking-tight text-sm lg:text-base text-right">
      Sempre estive em contato com a tecnologia, seja através de jogos ou simplesmente fazendo buscas na internet, mas nunca fui além disso.
      Graças a minha curiosidade e vontade de saber o porquê das coisas, cá estou inserida nesse meio tecnológico e inovador.
      Iniciei meus estudos sobre desenvolvimento web no final de 2021 e, agora exercendo a profissão, sigo minha jornada progredindo minhas habilidades técnicas e pessoais, além de acompanhar as tendências do mercado.
    </p>
  </div>
</template>

<style>
#about {
  right: calc(var(--pad) * 2);
  bottom: calc(var(--pad) * 2);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
#about::-webkit-scrollbar {
  display: none;
}
</style>
