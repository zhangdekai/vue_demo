<script lang="ts">

export default {
    name: "APITest",
    data() {

        return { name: '章三', age: '18', tel: '139223456789' }
    },
    methods: {
        showTel() {
            alert(this.tel)
        },
        changeName() {
            this.name = '里斯';
        }
    }
}

</script>

<template>


    <div class="APITest">

        <head>Test API </head>

        <h3 class="info">名字: {{ name }} --- 年龄: {{ age }}</h3>
        <button @click="showTel"> 查看Tel</button>

        <button @click="changeName"> 修改Name</button>

    </div>



</template>