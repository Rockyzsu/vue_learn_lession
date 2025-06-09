<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { Search } from '@element-plus/icons-vue'
let students = [
  {
    name: '小敏',
    id: '1011',
    class: '1班'
  },
  {
    name: '小前',
    id: '1012',
    class: '4班'
  },
  {
    name: '尹敏儿',
    id: '76',
    class: '9班'
  },

]

import { ref } from 'vue';

const currentValue = ref(50);

const handleChange = (newValue) => {
  console.log('新值:', newValue);
  // 若需要旧值，需自行维护
};

</script>

<template>
  <div class="container">
    <HelloWorld msg="Vite + Vue + 教程" />
    <el-button type="primary">
      <el-icon>
        <Search />
      </el-icon>
      <span>Search</span>
    </el-button>
    <h2>基础UI库</h2>
    <div>
      <el-button>默认风格</el-button>
      <el-button type="primary">Primary风格</el-button>
      <el-button type="success">Success风格</el-button>
      <el-button type="info">info风格</el-button>
      <el-button type="warning">warning风格</el-button>
      <el-button type="danger">Danger风格</el-button>
    </div>
    <h3>
      <span>太漂亮了</span>
      <span>修改状态</span>
    </h3>
    <div>
      <el-button type="primary" plain>Plain</el-button>
      <el-button type="primary" round>round</el-button>
      <el-button type="primary" circle>C</el-button>
    </div>
    <div>
      <h3>
        <span>表单类</span>
      </h3>

    </div>
    <div>
      <span>固定类型</span>
      <el-input-number :min="0" :max="1" :step="0.1" :precision="2" controls-position="right" />
    </div>
  </div>
  <div>
    <h3>日期选择器</h3>
    <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
    <hr />
    <el-date-picker type="datetime" placeholder="选择日期和时间"></el-date-picker>
  </div>

  <div>
    <h3>表格展示</h3>
    <el-table :data="students" style="width: 100%" stripe>
      <el-table-column prop="class" label="班级" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="id" label="学号" />

    </el-table>
  </div>
  <div id="container">
    <el-input placeholder="普通输入框"></el-input>
    <el-input placeholder="被禁用了" disabled></el-input>
    <el-input placeholder="带图标" prefix-icon="Search"></el-input>
  </div>
  <div class="container">
    <el-input-number :min="0" :max="10" :step="2" />
    <hr />
    <el-input-number :min="0" :max="1" :step="0.01" :precision="2" controls-position="left" />
  <el-input-number
  v-model="currentValue"
  :min="0"
  :max="100"
  controls-position="left"
  @change="handleChange"
/>

  </div>
</template>

<style scoped>
.container {
    margin: 100px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
