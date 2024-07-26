<!-- About.vue -->
<template>
    <div class="about">
        <h1>About</h1>
        <button @click="goBack">Go Back</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'About',
    setup() {
        const router = useRouter();

        const goBack = () => {
            router.go(-1);
        };

        return {
            goBack
        };
    }
});
</script>

<style scoped>
.about {
    padding: 20px;
}
</style>
