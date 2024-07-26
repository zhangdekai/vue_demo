<!-- Home.vue -->
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import TheWelcome from '@/components/TheWelcome.vue'
import Person from '@/components/person/person.vue'
import HelloWorld from '@/components/HelloWorld.vue';



export default defineComponent({
    name: 'Home',
    setup() {
        const router = useRouter();

        const count = ref(0);

        const goToAbout = () => {
            router.push({ name: 'About' });
        };

        const increaceCount = () => {
            count.value++;
        };

        return {
            goToAbout, increaceCount, count,
        };
    },
});


</script>

<template>


    <div class="home">
        <h1>Home</h1>

        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">

            <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

            <HelloWorld msg="You did it!" />

            <Person name1="li si" age1="22" tel1="132224242"> person </Person>

            <p> This is a paragraph </p>



            <div>
                <RouterLink to="/api_test" target="_blank"> API Test </RouterLink>

            </div>

        </div>

        <button @click="increaceCount">Increace Count : {{ count }}</button>

        <button @click="goToAbout">Go to About</button>

        <main>
            <TheWelcome />
        </main>
    </div>
</template>



<style scoped>
.home {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
}


.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    /* header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    } */

    .logo {
        margin: 0 2rem 0 0;
    }

    .wrapper {
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
