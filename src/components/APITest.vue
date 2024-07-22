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

<template>

    <div class="APITest">

        <h1> Test API </h1>

        <h3 class="info">名字: {{ name }} --- 年龄: {{ age }}</h3>
        <button @click="showTel"> 查看Tel</button>

        <button @click="changeName"> 修改Name</button>

        <button @click="changeAge"> 修改 Age </button>


    </div>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>表格示例</title>
    </head>

    <body>
        <h2>示例表格</h2>
        <h4> -- 使用 HTML 标签 table, thead, tbody, tr, th, td </h4>
        <table>
            <thead>
                <tr id="head">
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
    </body>



</template>

<style>
.head {
    line-height: 1.5;
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
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    color: #ee46bb;
}

.head,
th {
    color: #3b71f0;

}


th {
    background-color: #f2f2f2;
}
</style>