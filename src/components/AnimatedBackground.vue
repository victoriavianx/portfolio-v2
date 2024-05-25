<script setup lang="ts"></script>

<template>
  <div id="animated-background" class="background border-solid border-lime-600 border-2">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style>
@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.background {
  background: var(--bg-primary);
  position: fixed;
  z-index: 1;
  left: var(--pad);
  right: var(--pad);
  top: var(--pad);
  bottom: var(--pad);
  pointer-events: none;
  overflow: hidden;
}

.background span {
  width: 20vmin;
  height: 20vmin;
  border-radius: 20vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 45;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.background span:nth-child(0) {
  color: var(--bg-pink-400);
  top: 14%;
  left: 25%;
  animation-duration: 22s;
  animation-delay: -49s;
  transform-origin: -10vw 7vh;
  box-shadow: -40vmin 0 5.800746739208325vmin currentColor;
}
.background span:nth-child(1) {
  color: var(--bg-pink-400);
  top: 81%;
  left: 6%;
  animation-duration: 33s;
  animation-delay: -34s;
  transform-origin: -4vw -20vh;
  box-shadow: 40vmin 0 5.555027737852447vmin currentColor;
}
.background span:nth-child(2) {
  color: var(--bg-secondary);
  top: 98%;
  left: 57%;
  animation-duration: 19s;
  animation-delay: -45s;
  transform-origin: -9vw 14vh;
  box-shadow: -40vmin 0 5.286547288182144vmin currentColor;
}
.background span:nth-child(3) {
  color: var(--bg-quaternary);
  top: 2%;
  left: 57%;
  animation-duration: 24s;
  animation-delay: -21s;
  transform-origin: 18vw -12vh;
  box-shadow: -40vmin 0 5.938211086462841vmin currentColor;
}
.background span:nth-child(4) {
  color: var(--bg-quaternary);
  top: 48%;
  left: 50%;
  animation-duration: 55s;
  animation-delay: -24s;
  transform-origin: -3vw 4vh;
  box-shadow: -40vmin 0 5.230734307943195vmin currentColor;
}
.background span:nth-child(5) {
  color: var(--bg-secondary);
  top: 11%;
  left: 44%;
  animation-duration: 27s;
  animation-delay: -2s;
  transform-origin: -17vw -10vh;
  box-shadow: -40vmin 0 5.6082642663762945vmin currentColor;
}
.background span:nth-child(6) {
  color: var(--bg-quaternary);
  top: 72%;
  left: 86%;
  animation-duration: 10s;
  animation-delay: -3s;
  transform-origin: 16vw 0vh;
  box-shadow: -40vmin 0 5.35183387262084vmin currentColor;
}
.background span:nth-child(7) {
  color: var(--bg-quaternary);
  top: 5%;
  left: 26%;
  animation-duration: 12s;
  animation-delay: -4s;
  transform-origin: 7vw 22vh;
  box-shadow: -40vmin 0 5.85918218180291vmin currentColor;
}
.background span:nth-child(8) {
  color: var(--bg-pink-400);
  top: 24%;
  left: 92%;
  animation-duration: 15s;
  animation-delay: -2s;
  transform-origin: -9vw -22vh;
  box-shadow: 40vmin 0 5.215398278792655vmin currentColor;
}
.background span:nth-child(9) {
  color: var(--bg-quaternary);
  top: 6%;
  left: 9%;
  animation-duration: 27s;
  animation-delay: -20s;
  transform-origin: 3vw -13vh;
  box-shadow: -40vmin 0 5.668133187749433vmin currentColor;
}
.background span:nth-child(10) {
  color: var(--bg-quaternary);
  top: 87%;
  left: 25%;
  animation-duration: 6s;
  animation-delay: -42s;
  transform-origin: -21vw 15vh;
  box-shadow: 40vmin 0 5.062590160285777vmin currentColor;
}
.background span:nth-child(11) {
  color: var(--bg-secondary);
  top: 84%;
  left: 15%;
  animation-duration: 17s;
  animation-delay: -50s;
  transform-origin: 3vw 2vh;
  box-shadow: -40vmin 0 5.528170510080271vmin currentColor;
}
.background span:nth-child(12) {
  color: var(--bg-quaternary);
  top: 60%;
  left: 68%;
  animation-duration: 44s;
  animation-delay: -14s;
  transform-origin: 3vw 0vh;
  box-shadow: -40vmin 0 5.471962553141238vmin currentColor;
}
.background span:nth-child(13) {
  color: var(--bg-secondary);
  top: 74%;
  left: 68%;
  animation-duration: 16s;
  animation-delay: -39s;
  transform-origin: -24vw 6vh;
  box-shadow: -40vmin 0 5.1820427171188985vmin currentColor;
}
.background span:nth-child(14) {
  color: var(--bg-quaternary);
  top: 48%;
  left: 42%;
  animation-duration: 45s;
  animation-delay: -41s;
  transform-origin: -23vw 11vh;
  box-shadow: -40vmin 0 5.423088600768472vmin currentColor;
}
.background span:nth-child(15) {
  color: var(--bg-pink-400);
  top: 40%;
  left: 28%;
  animation-duration: 44s;
  animation-delay: -45s;
  transform-origin: -24vw -23vh;
  box-shadow: -40vmin 0 5.246249297775598vmin currentColor;
}
.background span:nth-child(16) {
  color: var(--bg-quaternary);
  top: 46%;
  left: 90%;
  animation-duration: 35s;
  animation-delay: -39s;
  transform-origin: -17vw 12vh;
  box-shadow: -40vmin 0 5.212917408515209vmin currentColor;
}
.background span:nth-child(17) {
  color: var(--bg-quaternary);
  top: 88%;
  left: 42%;
  animation-duration: 51s;
  animation-delay: -32s;
  transform-origin: -21vw 14vh;
  box-shadow: -40vmin 0 5.209811092859056vmin currentColor;
}
.background span:nth-child(18) {
  color: var(--bg-secondary);
  top: 14%;
  left: 62%;
  animation-duration: 13s;
  animation-delay: -13s;
  transform-origin: -12vw 13vh;
  box-shadow: -40vmin 0 5.801058794914564vmin currentColor;
}
.background span:nth-child(19) {
  color: var(--bg-secondary);
  top: 93%;
  left: 50%;
  animation-duration: 27s;
  animation-delay: -39s;
  transform-origin: -17vw 10vh;
  box-shadow: -40vmin 0 5.443633305472423vmin currentColor;
}
</style>
