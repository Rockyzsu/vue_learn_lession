<template>
  <div id="container">
    <div id="background"></div>
    <div id="title">
      <h1>精选好物</h1>
    </div>

    <div class="input">
      <el-input v-model="username" prefix-icon="User" placehold="请输入用户名"> </el-input>
    </div>
    <div class="input">
      <el-input v-model="password" prefix-icon="Lock" placeholder="请输入密码"></el-input>
    </div>
    <div class="input">
      <el-button type="primary" :disabled="disabled" style="width: 350px" @click="loginFunc">登录</el-button>
      <el-button type="default" :disabled="disabled" style="width: 150px" @click="signUpFunc">注册</el-button>
      <!-- 这个空间大小也会控制外部输入框的大小 -->
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
let username = ref("");
let password = ref("");
let disabled = computed(() => {
  return !(username.value.length > 0 && password.value.length > 0);
});
function loginFunc() {
  console.log("login");
  console.log(password.value)
  console.log(username.value)
}
function signUpFunc() {
  console.log("signUp");
}
</script>


<style scoped>
#container {
  height: 100%;
  width: 100%;
  position: absolute;
}

#background {
content:'';
position: absolute;
width: 100%;
height: 100%;
background-image: url("/src/assets/background.jpeg");
}
</style>