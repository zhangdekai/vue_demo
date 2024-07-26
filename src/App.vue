<script setup lang="ts">
// JS || TS 
import { RouterLink, RouterView } from 'vue-router';
import TheWelcome from '@/components/TheWelcome.vue'
import Person from '@/components/person/person.vue'
import HelloWorld from '@/components/HelloWorld.vue';


</script>

<template>

  <Transition name="slide-fade" mode="out-in">

    <RouterView />

  </Transition>

  <!-- <Person name1="li si" age1="22" tel1="132224242"> person </Person> -->

  <!-- <header>

    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <Person name1="li si" age1="22" tel1="132224242"> person </Person>



      <div>
        <RouterLink to="/api_test" target="_blank"> API Test </RouterLink>

      </div>

    </div>

  </header>

  <main>
    <TheWelcome />
  </main> -->

</template>


<style scoped>
/*  写样式 */

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(100%);
}

.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>
