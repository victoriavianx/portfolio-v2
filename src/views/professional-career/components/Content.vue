<script lang="ts"></script>

<template>
  <div id="content" class="fixed z-10 w-full max-w-80">
    <ul id="list" class="max-h-[17rem] overflow-y-scroll">
      <li>
        <div class="flex flex-row">
          <div class="w-full max-w-32">
            <p class="text-md pt-0.5 font-light font-secondary">
              2019 <span class="px-1">&#822;</span> 2020
            </p>
          </div>
          <div class="w-full">
            <h2 class="text-lg">Lorem Ipsum</h2>
            <p class="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor purus, pretium at
              libero non, efficitur vestibulum massa. Morbi sit amet euismod nibh, non condimentum
              massa. Curabitur a venenatis lorem, vel accumsan ante.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex flex-row">
          <div class="w-full max-w-32">
            <p class="text-md pt-0.5 font-light font-secondary">
              2019 <span class="px-1">&#822;</span> 2020
            </p>
          </div>
          <div class="w-full">
            <h2 class="text-lg">Lorem Ipsum</h2>
            <p class="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor purus, pretium at
              libero non, efficitur vestibulum massa. Morbi sit amet euismod nibh, non condimentum
              massa. Curabitur a venenatis lorem, vel accumsan ante.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex flex-row">
          <div class="w-full max-w-32">
            <p class="text-md pt-0.5 font-light font-secondary">
              2019 <span class="px-1">&#822;</span> 2020
            </p>
          </div>
          <div class="w-full">
            <h2 class="text-lg">Lorem Ipsum</h2>
            <p class="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor purus, pretium at
              libero non, efficitur vestibulum massa. Morbi sit amet euismod nibh, non condimentum
              massa. Curabitur a venenatis lorem, vel accumsan ante.
            </p>
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

.font-secondary {
  font-family: var(--font-secondary);
}
</style>
