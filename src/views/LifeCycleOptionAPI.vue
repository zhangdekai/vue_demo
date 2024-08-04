<!-- LifeCycle.vue -->

<script lang="ts">

import { useRouter } from 'vue-router';
import {
    defineComponent
} from 'vue';


// const router = useRouter();

// function goBack() {
//     router.go(-1);
// }

/// Option API 
export default defineComponent({
    name: 'LifeCycleOptionAPI',
    data() {
        return {
            name: '9529'
        }
    },
    methods: {


    },
    setup() {

        const router = useRouter();

        function goBack() {
            router.go(-1);
        }

        console.log('setup ');

        return { goBack }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');

    },
    beforeMount() {
        console.log('beforeMount');

    }, mounted() {
        console.log('mounted');

    },
    beforeUnmount() {
        console.log('beforeUnmount');

    },
    unmounted() {
        console.log('unmounted');

    },
    errorCaptured(err, instance, info) {
        console.log(`errorCaptured err == ${err}, instance == ${instance}, info == ${info}`);

    }, renderTracked({ key, target, type }) {
        console.log(`renderTracked key == ${key}, target == ${target}, type == ${type}`);
    },
    renderTriggered({ key, target, type }) {
        console.log(`renderTriggered key == ${key}, target == ${target}, type == ${type}`);
    },

})


</script>

<template>
    <div class="lifeCycleOptionalAPI">
        <h1>LifeCycle Page</h1>

        <br />

        <h2>Vue3 LifeCycle Optioinal API Mode </h2>

        <br />

        <p>Vue3 的生命周期有三个阶段：创建、更新、销毁。</p>

        <br />

        <p>创建阶段：在这个阶段，Vue 实例被创建，其初始化的过程包括数据观测、属性和方法的初始化、事件处理器的初始化等。在这一步，实例的属性和方法都还没有被挂载到 DOM 上。</p>
        <br />

        <p>更新阶段：在这个阶段，Vue 实例的数据发生变化时，会触发视图更新。视图更新的过程包括重新渲染、打补丁、渲染和过渡效果的应用等。在这一步，实例的属性和方法已经被挂载到 DOM 上。</p>
        <br />

        <p>销毁阶段：在这个阶段，Vue 实例被销毁，其绑定的事件处理器、实例方法、定时器、子组件实例等都会被解绑和清除。在这一步，实例的属性和方法都已经被删除。</p>

        <br />

        <p>

        <p>
            Vue 3 的生命周期钩子与 Vue 2 的生命周期钩子在概念上是相似的，但有一些变化和改进。以下是 Vue 3 的生命周期钩子及其简要说明：

            在 Vue 3 中，
            <br />
            <b>setup</b> 是一个新的组件选项，用于组合式 API（Composition API）。它是在组件创建之前执行的，
            <b>因此在 beforeCreate 钩子之前调用</b>。setup 函数是组合式 API
            的入口点，你可以在其中定义响应式数据、计算属性、方法等。

            由于 setup 是在组件实例创建之前执行的，因此它没有访问 this。相反，它通过参数接收 props 和 context。

            以下是 setup 函数的简要说明：

            props：组件的 props，是响应式的，可以在 setup 中直接使用。
            context：包含三个属性：attrs、slots 和 emit。
            attrs：非响应式的对象，包含所有非 prop 的 attribute。
            slots：包含所有插槽内容的函数。
            emit：用于触发自定义事件的函数。
            在 setup 函数中，你可以使用 Vue 3 提供的组合式 API 函数，如 ref、reactive、computed、watch 等，来定义和管理组件的状态和逻辑。
        </p>

        <br />

        <b>beforeCreate:</b>
        在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
        <br />

        <b>created:</b>实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el
        属性目前不可见。
        <br />
        <b>beforeMount：</b>在挂载开始之前被调用：相关的 render 函数首次被调用。
        <br />
        <b>mounted：</b>实例被挂载后调用，这时 el 被新创建的 vm.$el 替换。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。
        <br />

        <b>beforeUpdate：</b>数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
        <br />

        <b>updated：</b>由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
        <br />

        <b>beforeUnmount: </b>（在 Vue 2 中称为 beforeDestroy）：在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。
        <br />

        <b>unmounted:</b>（在 Vue 2 中称为 destroyed）：卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解绑，所有事件监听器都被移除，所有子组件实例被卸载。
        此外，Vue 3 还引入了两个新的钩子：
        <br />

        <b>errorCaptured：</b>当捕获一个来自后代组件的错误时被调用。此钩子会收到三个参数：错误对象、错误组件实例和一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止错误继续向上传播。
        <br />

        <b>renderTracked：</b>跟踪虚拟 DOM 重新渲染时调用。钩子接收 debugger event 作为参数。此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。
        <br />

        <b>renderTriggered：</b>当虚拟 DOM 重新渲染被触发时调用。和 renderTracked 类似，接收 debugger event
        作为参数。此事件告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键。
        这些生命周期钩子可以帮助你在 Vue 3 应用的不同阶段执行特定的逻辑和操作。



        </p>


        <br />
        <button @click="goBack">Go Back</button>
    </div>
</template>



<style scoped>
.lifeCycleOptionAPI {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;

}

b {
    font-weight: 600;
    font-size: medium;
}
</style>
