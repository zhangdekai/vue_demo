<!-- About.vue -->

<script setup lang="ts">// <script setup> 单文件组件模式： Single-File Component，简称 SFC
import { useRouter } from 'vue-router';
const router = useRouter();

function goBack() {
    router.go(-1);
}

</script>

<template>
    <div class="about">
        <h1>About Page</h1>

        <br />

        <a href="https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html" target="_blank">Vue 响应式原理</a>

        <br>声明响应式状态 ref()</br>

        <p>Ref 可以持有任何类型的值，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构，比如 Map。

            Ref 会使它的值具有深层响应性。这意味着即使改变嵌套对象或数组时，变化也会被检测到：</p>
        <br />

        <code>
                const count = ref(0);
                const obj = reactive({ count: 0 });
            
            </code>


        <br />

        <h4> 面试题：setup(), data, method 是否可以同时使用，互相调用</h4>

        <p> setup(), data, method 可以同时使用 。 data 里可以读到setup 里的数据,
            Vue 2 可以读取 Vue 3 里的新语法，反之不行， 也就是 setup 不能读取 data 和 methods 里的数据。


        </p>






        <br />
        <button @click="goBack">Go Back</button>
    </div>
</template>



<style scoped>
.about {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;

}

code {
    background-color: #f1dede;
}
</style>
