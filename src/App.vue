<script setup lang="ts">
// JS || TS 
import { RouterLink } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Person from './components/person/person.vue'

</script>

<template>

  <header>

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
  </main>

</template>


<style scoped>
/*  写样式 */

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    background-color: rgb(206, 252, 252);
    border-radius: 10pt;
    padding: 20pt;
    box-shadow: 0 0 5pt;
  }
}
</style>
