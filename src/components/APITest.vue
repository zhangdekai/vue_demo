<script lang="ts">

export default {
    name: "APITest",
    data() {

        return { name: '章三', age: 18, tel: '139223456789' }
    },
    methods: {
        showTel() {
            alert(this.tel)
        },
        changeName() {
            this.name = '里斯';
        },
        changeAge() {
            this.age += 1;
        }
    }
}

</script>

<template class="APITest">

    <body>

        <div class="container">
            <h2>纵向布局</h2>
            <h4> -- 使用 flex 布局 </h4>

            <h3 class="info">名字: {{ name }} --- 年龄: {{ age }}</h3>

            <div class="btn_group">

                <button @click="showTel"> 查看Tel</button>

                <button @click="changeName"> 修改Name</button>

                <button @click="changeAge"> 修改 Age </button>
                <h4 class="h4_id"> -- 横向布局 使用 flex 布局 </h4>

            </div>


            <br>
            <h2>示例表格</h2>
            <h4> -- 使用 HTML 标签 table, thead, tbody, tr, th, td </h4>
            <table>
                <thead>
                    <tr id="table_head">
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>城市</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>张三</td>
                        <td>25</td>
                        <td>北京</td>
                    </tr>
                    <tr>
                        <td>李四</td>
                        <td>30</td>
                        <td>上海</td>
                    </tr>
                    <tr>
                        <td>王五</td>
                        <td>28</td>
                        <td>广州</td>
                    </tr>
                </tbody>
            </table>

            <br>
            <h4>指令 Directives ​</h4>
            <p>

                指令是带有 v- 前缀的特殊 attribute。Vue 提供了许多内置指令，包括上面我们所介绍的 v-bind 和 v-html。

                指令 attribute 的期望值为一个 JavaScript 表达式 (除了少数几个例外，即之后要讨论到的 v-for、v-on 和 v-slot)。一个指令的任务是在其表达式的值变化时响应式地更新
                DOM。以 v-if 为例：
            </p>
            <!-- <p v-if="seen">Now you see me</p> -->

        </div>

    </body>



</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
}

.btn_group {
    /* display: flex ; */
    display: flex;
    /* flex-direction: column 纵向; */
    flex-direction: row;
    /* start center end space-between space-around */
    justify-content: start;
    /* wrap: 换行 wrap-reverse 不换行 */
    flex-wrap: wrap;
    /* 设置侧轴上的子元素的排列方式（单行 */
    align-items: center;
    /* 设置侧轴上的子元素的排列方式（多行）,单行无效果 */
    align-content: start;

}

button,
.h4_id {
    border: #0b1221;
    /* border-width: 1pt;
    border-color: #f0abdc; */
    padding: 5pt 20pt;
}

.info {
    background-color: rgb(186, 238, 175);
}



table {
    width: 100%;
    border-collapse: collapse;
}

h4 {
    color: #3b71f0;
}



th,
td {
    border: 1px solid #787575;
    padding: 8px;
    text-align: left;
    color: #ee46bb;
}

.table_head,
th {
    color: #3b71f0;

}


th {
    background-color: #f2f2f2;
}
</style>