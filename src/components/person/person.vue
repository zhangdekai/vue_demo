<script lang="ts">

export default {
    name: 'Person',// vue2 选项式(Options) API 
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
    <div class="Person">
        <h3 class="info">名字: {{ name }} --- 年龄: {{ age }}</h3>
        <button @click="showTel"> 查看Tel</button>

        <button @click="changeName"> 修改Name</button>

    </div>
</template>



<style>
.info {
    color: rgb(236, 127, 172);
    font-size: 12pt;
    border: 1pt;
    border-radius: 3pt;
    background-color: aquamarine;
    padding: 5pt 10pt;
    margin: 10pt 0;
}

button {
    margin: 5px;
}
</style>